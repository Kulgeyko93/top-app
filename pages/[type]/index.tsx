import Image from 'next/image';
import axios from 'axios';
// import { useState } from 'react';
import {withLayout} from './../../layout/Layout';
// import {Button, Htag, Tag, P, Rating} from '../components';
// import styles from '../styles/Home.module.css';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MenuItem } from '../../intarfaces/menu.interface';
import { firstCategoryMenu } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'querystring';

function Type({ firstCategory }: TypeProps): JSX.Element {
  return (
    <>
     Type {firstCategory}
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstCategoryMenu.map(m => '/' + m.route),
    fallback: true,
  };
};


export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}