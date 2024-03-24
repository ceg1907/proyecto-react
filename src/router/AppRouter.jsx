import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from '../layout/Layout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path='*' element={<h2>404 not found</h2>} />
    </Routes>
  );
};
