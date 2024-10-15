import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from '@/constants/routes';
import Home from '@pages/Home';

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
