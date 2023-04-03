import React from 'react';
import './App.css';
import axios from 'axios';

interface Item {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: { rate: number; count: number };
}

function App() {
  const [items, setItems] = React.useState<Item[]>();

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then(({ data }) => setItems(data));
  }, []);

  return (
    <div className="App">
      {items && items.map((item: Item) => <img src={item.image} key={item.id} />)}
    </div>
  );
}

export default App;
