import React, { useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Advantage, Card, Htag, P, Sort, Tag } from '../../components';
import { HhData } from '../../components/hhData/hhData';
import { TopLevelCategory } from '../../intarfaces/toppage.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      <div className={styles.hh}>
        {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}

        {
          page.advantages && page.advantages.length > 0 && (
            <>
              <Htag tag='h2'>Преимущества</Htag>
              <Advantage advantages={page.advantages} />
            </>
          )
        }
        {page.seoText &&  <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
        <Htag tag='h2'>Полученные навыки</Htag>

        {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        
      </div>
    </div>
  );
};
