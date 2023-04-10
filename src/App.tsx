import React, { useState } from 'react';
import './App.css';
import { Categories, Sort } from './components/';
import { selectSort, useAppSelector } from './Redux/hooks';
import { useGetProductsQuery } from './Redux/Slice/productsSlice';

function App() {
  const { category, sort } = useAppSelector(selectSort);
  const { data: items, isLoading, error } = useGetProductsQuery({ category, sort });

  return (
    <div className="App">
      <Categories />
      <Sort />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {items && items.map((item) => <img src={item.image} key={item.id} />)}
    </div>
  );
}

export default App;
