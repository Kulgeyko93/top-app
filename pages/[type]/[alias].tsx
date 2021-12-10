import Image from 'next/image';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {withLayout} from '../../layout/Layout';
// import {Button, Htag, Tag, P, Rating} from '../../components';
import { MenuItem } from '../../intarfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../intarfaces/toppage.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../intarfaces/product.interface';
import { firstCategoryMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';
// import styles from '../styles/Home.module.css';
// import { MenuItem } from '../intarfaces/menu.interface';

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {

  return (
    <>
      <TopPageComponent page={page} products={products} firstCategory={firstCategory} />
    </>
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstCategoryMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstCategoryMenu.find(m => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });
    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10
    });
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      }
    };
  } catch (error) {
    return {
      notFound: true,
    }; 
  }


};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}