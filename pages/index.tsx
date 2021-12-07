import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import {withLayout} from './../layout/Layout';
import {Button, Htag, Tag, P, Rating} from '../components';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import { MenuItem } from '../intarfaces/menu.interface';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appereance='primary' arrow="right">button</Button>
      <Button appereance='ghost' arrow="down">ghost</Button>
      <P>asdasdasdsadassdsdaasd</P>
      <Tag size='s' color='green'>asda</Tag>
      <Rating rating={rating} setRating={setRating} isEditeble={true}/>

      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}