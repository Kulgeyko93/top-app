import React from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', color = 'ghost', href, className, children, ...props}: TagProps): JSX.Element => {
  return (
    <p
      className={cn(
                  styles.tag,
                  className,
                  {
                    [styles.l]: size === 'l',
                    [styles.m]: size === 'm',
                    [styles.s]: size === 's',
                    [styles.red]: color === 'red',
                    [styles.grey]: color === 'grey',
                    [styles.ghost]: color === 'ghost',
                    [styles.green]: color === 'green',
                    [styles.primary]: color === 'primary',
                    
                  }
                )}
      {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </p>
  );
};
