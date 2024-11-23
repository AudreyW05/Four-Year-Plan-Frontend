import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routes } from '@/constants/routes';
import { getLocalStorageValue } from '@/utils/miscellaneous';

import { useApi } from '@/api/ApiHandler';
import UserService from '@/api/user/UserService';

import { updateCurrentUser } from '@/modules/user/userSlice';

import Login from '@pages/Landing/Login/Login';
import Home from '@/pages/Home';
import Test from '@pages/Test/Test';
import SignUp from '@/pages/Landing/SignUp';

const BaseRouter = () => {
  const dispatch = useDispatch();
  const accessToken: string | null = getLocalStorageValue('accessToken') ?? null;
  // const [getSelf] = useApi(() => UserService.getSelf(), false, false, false);

  // const fetchSelf = async () => {
  //   try {
  //     const res = await getSelf();
  //     if (!res.isSuccess) return;
  //     dispatch(updateCurrentUser(res.data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (!accessToken) return;
  //   fetchSelf();
  // }, [accessToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.home}
          element={
            accessToken ? (
              <Home /> // Show the Home page if accessToken is present
            ) : (
              <Navigate to={routes.authentication.login} /> // Redirect to login if no accessToken
            )
          }
        />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.authentication.login} element={<Login />} />
        <Route path={routes.authentication.signup} element={<SignUp />} />
        <Route path={routes.test} element={<Test />} />
        <Route path='*' element={<Navigate to={routes.home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
