import React from 'react';
import styles from './Basket.module.scss';

export const BasketSkeleton: React.FC = () => {
  return (
    <section className={styles.basket}>
      <div className={styles.basketEmpty}>Empty :(</div>
    </section>
  );
};
