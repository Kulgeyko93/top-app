import React, { useContext } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory} = useContext(AppContext);
  return (
    <div>
      {
        menu.map(m => (<div key={m._id.secondCategory}>{m._id.secondCategory}</div>))
      }
    </div>
  );
};
