import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from '@/constants/routes';
import Home from '@pages/Home';
import Login from '@pages/Landing/Login';

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.authentication.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
