import Image from 'next/image';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useState } from 'react';
import {withLayout} from './../../layout/Layout';
// import {Button, Htag, Tag, P, Rating} from '../../components';
import { MenuItem } from '../../intarfaces/menu.interface';
import { TopPageModel } from '../../intarfaces/toppage.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../intarfaces/product.interface';
// import styles from '../styles/Home.module.css';
// import { MenuItem } from '../intarfaces/menu.interface';

const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {

  return (
    <>
      {products.length}
    </>
  );
}

export default withLayout(Course);

export const getStaticPaths: any = async (): any => {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    }
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}