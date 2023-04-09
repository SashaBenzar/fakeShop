import React, { useState } from 'react';
import './App.css';
import { useGetCategoriesQuery, useGetProductsQuery } from './Redux/Slice/productsSlice';

function App() {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');
  const { data: items, isLoading, error } = useGetProductsQuery({ category, sort });
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <div className="App">
      <ul>
        <li onClick={() => setCategory('')}>all</li>
        {categories?.map((cat) => (
          <li key={cat} onClick={() => setCategory('category/' + cat)}>
            {cat}
          </li>
        ))}
      </ul>
      <ul>
        <li onClick={() => setSort('asc')}>asc</li>
        <li onClick={() => setSort('desc')}>desc</li>
      </ul>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {items && items.map((item) => <img src={item.image} key={item.id} />)}
    </div>
  );
}

export default App;
