import React from 'react';

import BaseRouter from '@/components/Routers/BaseRouter';
import Notifier from '@/components/Notifier/Notifier';
import { useSelector } from 'react-redux';
import { isNotifierShown } from '@/modules/ui/uiSlice';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const isNotify = useSelector(isNotifierShown);
  return (
    <BrowserRouter>
      {isNotify && <Notifier />}
      <BaseRouter />
    </BrowserRouter>
  );
}

export default App;
