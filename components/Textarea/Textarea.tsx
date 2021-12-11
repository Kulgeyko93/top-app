import React from 'react';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = ({ placeholder, className, ...props}: TextareaProps): JSX.Element => {
  return (
    <textarea placeholder={placeholder} className={cn(className, styles.input)} {...props}/>
  );
};
