import React from 'react';
import styles from './BasketCart.module.scss';
import del from '../../img/x.svg';
import { BasketItem } from '../../Redux/types';
import { useAppDispatch } from '../../Redux/hooks';
import { deleteItem, minusItem, plusItem } from '../../Redux/Slice/basketSlice';

export const BasketCart: React.FC<BasketItem> = ({ ...props }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cart}>
      <div className={styles.cartConteiner}>
        <div className={styles.cartImg}>
          <img src={props.image} alt="img" />
        </div>
        <div className={styles.cartInfo}>
          <div className={styles.cartTitle}>{props.title}</div>
          <div className={styles.cartPrice}>{props.price}$</div>
        </div>
      </div>
      <div className={styles.cartConteiner}>
        <div className={styles.cartAdd}>
          <button onClick={() => dispatch(minusItem(props.id))}>-</button>
          <span>{props.count}</span>
          <button onClick={() => dispatch(plusItem(props.id))}>+</button>
        </div>
        <div className={styles.cartDelete} onClick={() => dispatch(deleteItem(props.id))}>
          <img src={del} alt="X" />
        </div>
      </div>
    </div>
  );
};
