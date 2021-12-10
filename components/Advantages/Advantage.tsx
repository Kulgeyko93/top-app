import React from 'react';
import { HhAdvantageProps } from './Advantage.props';
import CheckIcon from './check.svg';
import styles from './Advantage.module.css';

export const Advantage = ({advantages}: HhAdvantageProps): JSX.Element => {
  return (
    <>
      {
        advantages.map(a => (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon />
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vline} />
            <div className={styles.description}>{a.description}</div>
          </div>
        ))
      }
    </>
  );
};
