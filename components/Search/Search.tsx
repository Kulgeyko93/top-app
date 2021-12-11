import React, { useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SearchProps } from './Search.props';
import { Input, Button } from '..';
import SearchIcon from './search.svg';
import styles from './Search.module.css';

export const Search = ({ className, ...props}: SearchProps): JSX.Element => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const hadleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') goToSearch();
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
      className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={hadleKeyDown}
      />
      <Button
        appereance='primary'
        className={styles.button}
        onClick={() => goToSearch()}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
