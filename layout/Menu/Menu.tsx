import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../intarfaces/menu.interface';
import Books from './icons/books.svg';
import Courses from './icons/courses.svg';
import Products from './icons/products.svg';
import Services from './icons/services.svg';
import { TopLevelCategory } from '../../intarfaces/toppage.interface';

const firstCategoryMenu :FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <Courses />, id: TopLevelCategory.Courses },
  { route: 'sercices', name: 'Сервисы', icon: <Services />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <Books />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <Products />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory} = useContext(AppContext);
  const buildFirstLevel = () => {
    return (
      <>
        {
          firstCategoryMenu.map(m => (
            <div key={m.route}>
              <a href={`/${m.route}`}>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory
                })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
              {m.id === firstCategory && buildSecondLevel(m)}
            </div>
          ))
        }
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {
          menu.map(m => (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div className={cn(styles.secondLEvelBlock, {
                [styles.secondLEvelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          ))
        }
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {
          pages.map(p => (
            <a
              key={p._id}
              href={`/${route}/${p.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: false
              })}
            >
              {p.category}
            </a>
          ))
        }
      </>
    );
  };


  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
