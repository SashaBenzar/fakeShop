import React from 'react';
import styles from './Header.module.scss';

import searchImg from '../../img/search.svg';
import basket from '../../img/basket.svg';
import { useAppDispatch, selectSort, useAppSelector } from '../../Redux/hooks';
import { setSearch } from '../../Redux/Slice/sortSlice';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector(selectSort);

  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.headerBody}>
          <Link to="/" className={styles.headerLogo}>
            Fake Shop
          </Link>
          <div className={styles.headerSearch}>
            <input
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
              placeholder="Search..."
            />
            <img src={searchImg} alt="search" />
          </div>
          <div className={styles.headerMenu}>
            <div className={styles.headerBasket}>
              100$
              <Link to="basket">
                <img src={basket} alt="basket" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
