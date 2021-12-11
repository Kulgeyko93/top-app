import React from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card, Rating, Tag } from '..';
import Image from 'next/image';

export const Product = ({product, className, children, ...props}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={'https://courses-top.ru' + product.image}
          alt={product.title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.title}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(c => <Tag key={c} color='ghost'>{c}</Tag>)}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
    </Card>
  );
};
