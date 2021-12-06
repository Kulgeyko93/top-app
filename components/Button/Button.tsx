import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

export const Button = ({appereance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button, 
        className,
        {
          [styles.primary]: appereance === 'primary',
          [styles.ghost]: appereance === 'ghost'
        }
      )}
      {...props}
    >
      {children}
      {
        arrow !== 'none' && <span className={cn(
                                                styles.arrow, 
                                                {
                                                  [styles.down]: arrow === 'down'
                                                }
                                            )}>
          <ArrowIcon />
        </span>
      }
    </button>
  );
};
