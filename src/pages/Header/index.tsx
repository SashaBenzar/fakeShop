import React from 'react';
import styles from './Header.module.scss';
import search from '../../img/search.svg';
import basket from '../../img/basket.svg';
import profile from '../../img/profile.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="conteiner">
        <div className={styles.headerBody}>
          <div className={styles.headerLogo}>Fake Shop</div>
          <div className={styles.headerSearch}>
            <input placeholder="Search..." />
            <img src={search} alt="search" />
          </div>
          <div className={styles.headerMenu}>
            <div className={styles.headerBasket}>
              100$
              <img src={basket} alt="basket" />
            </div>
            <div className={styles.headerProfile}>
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
