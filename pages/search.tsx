import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import {withLayout} from './../layout/Layout';
import {Button, Htag, Tag, P, Rating} from '../components';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import { MenuItem } from '../intarfaces/menu.interface';

function Search(): JSX.Element {
  return (
    <>
     asdasdasdasdas
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}