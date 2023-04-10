import React from 'react';
import { Item } from '../../Redux/types';
import styles from './Cart.module.scss';

export const Cart: React.FC<Item> = ({ ...props }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartConteiner}>
        <div className={styles.cartImage}>
          <img src={props.image} alt="image" />
        </div>
        <div className={styles.cartBody}>
          <div className={styles.cartTitle}>{props.title}</div>
          <div className={styles.cartBuy}>
            <div className={styles.cartPrice}>{props.price}$</div>
            <button className={styles.cartAdd}>
              Add<span>1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
