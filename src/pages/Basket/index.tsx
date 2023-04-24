import React from 'react';
import styles from './Basket.module.scss';
import trash from '../../img/trash.svg';
import { BasketCart } from '../../components';

export const Basket: React.FC = () => {
  return (
    <section className={styles.basket}>
      <div className="conteiner">
        <div className={styles.basketBody}>
          <div className={styles.basketTitle}>Basket</div>
          <div className={styles.basketDeleteAll}>
            Delete all
            <img src={trash} alt="trash" />
          </div>
          <div className={styles.basketCards}>
            <BasketCart />
          </div>
          <div className={styles.basketOrder}>
            <div className={styles.basketSum}>order amount: 200$</div>
            <button className={styles.basketBuy}>buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};
