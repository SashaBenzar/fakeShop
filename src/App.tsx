import React, { useState } from 'react';
import './scss/style.scss';
import { Footer, Header, Products } from './pages/';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
