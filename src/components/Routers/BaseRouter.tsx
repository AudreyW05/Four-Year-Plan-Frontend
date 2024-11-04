import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from '@/constants/routes';
import Home from '@pages/Home';
import Login from '@pages/Landing/Login';
import SignUp from '@pages/Landing/SignUp';
import ForgotPassword from '@/pages/Landing/ForgotPassword';
import NewPassword from '@/pages/Landing/NewPassword';

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.authentication.login} element={<Login />} />
        <Route path={routes.authentication.signup} element={<SignUp />} />
        <Route path={routes.authentication.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.authentication.newPassword} element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
