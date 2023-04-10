import { selectSort, useAppSelector } from '../../Redux/hooks';
import { useGetProductsQuery } from '../../Redux/Slice/productsSlice';
import { Categories, Sort, Cart } from '../../components/';

import styles from './Products.module.scss';
import React from 'react';

export const Products: React.FC = () => {
  const { category, sort } = useAppSelector(selectSort);
  const { data: items, isLoading, error } = useGetProductsQuery({ category, sort });
  return (
    <section className={styles.products}>
      <div className="conteiner">
        <div className={styles.productsBody}>
          <div className={styles.productsTitle}>Products</div>
          <div className={styles.productsSort}>
            <Categories />
            <Sort />
          </div>
          <div className={styles.productsCarts}>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {items && items.map((item) => <Cart key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
