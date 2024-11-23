import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '@/constants/routes';
import { getLocalStorageValue } from '@/utils/miscellaneous';

import { useApi } from '@/api/ApiHandler';
import UserService from '@/api/user/UserService';
import { updateCurrentUser, getCurrentUser } from '@/modules/user/userSlice';

import Login from '@pages/Landing/Login/Login';
import Home from '@/pages/Home';
import Test from '@pages/Test/Test';
import SignUp from '@pages/Landing/SignUp';
import ForgotPassword from '@/pages/Landing/ForgotPassword';

const BaseRouter = () => {
  const dispatch = useDispatch();
  const accessToken: string | null = getLocalStorageValue('accessToken') ?? null;
  const [getSelf] = useApi(() => UserService.getSelf(), false, false, false);
  const currentUser = useSelector(getCurrentUser);

  const fetchSelf = async () => {
    try {
      const res = await getSelf();
      if (res.isSuccess) {
        dispatch(updateCurrentUser(res.data)); // Dispatch user info if successful
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  useEffect(() => {
    if (!accessToken) return;
    fetchSelf();
  }, [currentUser]);

  return (
    <Routes>
      <Route
        path={routes.home}
        element={accessToken ? <Home /> : <Navigate to={routes.authentication.login} />} // Redirect if user data is not loaded
      />
      <Route path={routes.authentication.login} element={<Login />} />
      <Route path={routes.authentication.signup} element={<SignUp />} />
      <Route path={routes.authentication.forgotPassword} element={<ForgotPassword />} />
      <Route path={routes.test} element={<Test />} />
      <Route path='*' element={<Navigate to={routes.home} />} />
    </Routes>
  );
};

export default BaseRouter;
