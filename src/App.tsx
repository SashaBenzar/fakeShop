import React, { useState } from 'react';
import './scss/style.scss';
import { Header, Products } from './pages/';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Products />
    </div>
  );
}

export default App;
