import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './P.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown> >(Component: FunctionComponent<T>) => {
  return function wiyhLayoutComponent (props: T): JSX.Element {
    return (
      <Layout>
        {
          <Component {...props} />
        }
      </Layout>
    );
  };
} ;