import React from 'react';
import styles from './BasketCart.module.scss';
import del from '../../img/x.svg';
import test from '../../img/image1.png';

export const BasketCart: React.FC = ({ ...props }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartConteiner}>
        <div className={styles.cartImg}>
          <img src={test} alt="img" />
        </div>
        <div className={styles.cartInfo}>
          <div className={styles.cartTitle}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </div>
          <div className={styles.cartPrice}>100$</div>
        </div>
      </div>
      <div className={styles.cartConteiner}>
        <div className={styles.cartAdd}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className={styles.cartDelete}>
          <img src={del} alt="X" />
        </div>
      </div>
    </div>
  );
};
