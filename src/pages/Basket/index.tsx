import React from 'react';
import styles from './Basket.module.scss';
import trash from '../../img/trash.svg';
import { BasketCart } from '../../components';
import { selectBasket, useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { deleteAll } from '../../Redux/Slice/basketSlice';
import { BasketSkeleton } from './BasketSkeleton';

export const Basket: React.FC = () => {
  const { items, totalPrice } = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();

  if (!items.length) {
    return <BasketSkeleton />;
  }

  return (
    <section className={styles.basket}>
      <div className="conteiner">
        <div className={styles.basketBody}>
          <div className={styles.basketTitle}>Basket</div>
          <div className={styles.basketDeleteAll} onClick={() => dispatch(deleteAll())}>
            Delete all
            <img src={trash} alt="trash" />
          </div>
          <div className={styles.basketCards}>
            {items.map((item, index) => (
              <BasketCart key={index} {...item} />
            ))}
          </div>
          <div className={styles.basketOrder}>
            <div className={styles.basketSum}>order amount: {totalPrice.toFixed(2)}$</div>
            <button className={styles.basketBuy}>buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};
