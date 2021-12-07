import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © {format(new Date(), 'yyyy')} - {Number(format(new Date(), 'yyyy')) + 1} Все права защищены
      </div>
      <a href="#" target="blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
