import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from '@/constants/routes';
import Home from '@pages/Home';
import Login from '@pages/Landing/Login';
import SignUp from '@pages/Landing/SignUp';

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.authentication.login} element={<Login />} />
        <Route path={routes.authentication.signup} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
