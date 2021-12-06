import Image from 'next/image';
import {Button, Htag, P} from '../components';
import styles from '../styles/Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>text</Htag>
      <Button appereance='primary' arrow="right">button</Button>
      <Button appereance='ghost' arrow="down">ghost</Button>
      <P>asdasdasdsadassdsdaasd</P>
    </div>
  );
}
