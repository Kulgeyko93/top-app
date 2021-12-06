import Image from 'next/image';
import { useState } from 'react';
import {withLayout} from './../layout/Layout';
import {Button, Htag, Tag, P, Rating} from '../components';
import styles from '../styles/Home.module.css';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appereance='primary' arrow="right">button</Button>
      <Button appereance='ghost' arrow="down">ghost</Button>
      <P>asdasdasdsadassdsdaasd</P>


      <Tag size='s' color='green'>asda</Tag>

      <Rating rating={rating} setRating={setRating} isEditeble={true}/>
    </>
  );
}



export default withLayout(Home);