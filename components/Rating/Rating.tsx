import React, { useState, useEffect } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({ isEditeble, rating, setRating, className, children, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number): JSX.Element => {
      return (
        <span
            className={cn(styles.star,
              {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditeble
              }
            )}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
          >
          <StarIcon 

            tabIndex={isEditeble ? 0 : -1}
            onKeyDown={(e: KeyboardEvent) => isEditeble && handleSpace(i + 1, e)}
          />
        </span>
        
        
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditeble) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditeble || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    
    setRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);
  return (
    <div {...props}>
      {
        ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))
      }
    </div>
  );
};
