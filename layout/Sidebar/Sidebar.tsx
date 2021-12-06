import React from 'react';
import { SidebarProps } from './SideBar.props';
import styles from './P.module.css';
import cn from 'classnames';

export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      sidebar
    </div>
  );
};
