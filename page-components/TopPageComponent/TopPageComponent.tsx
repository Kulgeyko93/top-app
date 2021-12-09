import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Card, Htag, Tag } from '../../components';
import { HhData } from '../../components/hhData/hhData';
import { TopLevelCategory } from '../../intarfaces/toppage.interface';

export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <span>sorts</span>
      </div>
      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      <div className={styles.hh}>
        {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
      </div>
    </div>
  );
};
