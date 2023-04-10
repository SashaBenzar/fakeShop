import React, { useState } from 'react';
import './scss/style.scss';
import { Categories, Sort } from './components/';
import { selectSort, useAppSelector } from './Redux/hooks';
import { useGetProductsQuery } from './Redux/Slice/productsSlice';
import { Header } from './pages/Header';

function App() {
  const { category, sort } = useAppSelector(selectSort);
  const { data: items, isLoading, error } = useGetProductsQuery({ category, sort });

  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Sort />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {items && items.map((item) => <img src={item.image} key={item.id} />)}
    </div>
  );
}

export default App;
