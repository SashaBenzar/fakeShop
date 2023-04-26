import React from 'react';
import { selectBasket, useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { addItem } from '../../Redux/Slice/basketSlice';
import { Item } from '../../Redux/types';
import styles from './Cart.module.scss';

export const Cart: React.FC<Item> = ({ ...props }) => {
  const count = useAppSelector(
    (state) => state.basket.items.find((item) => item.id === props.id)?.count,
  );
  const dispatch = useAppDispatch();

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
            <button className={styles.cartAdd} onClick={() => dispatch(addItem(props))}>
              Add<span>{count ? count : 0}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
