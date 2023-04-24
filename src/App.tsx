import React from 'react';
import './scss/style.scss';
import { Products, Layout, Basket } from './pages/';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Products />} />
      <Route path="basket" element={<Basket />} />
      <Route index element={<Navigate to="home" />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Route>,
  ),
);

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
