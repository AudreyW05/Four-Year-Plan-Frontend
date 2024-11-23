import React from 'react';

import BaseRouter from '@/components/Routers/BaseRouter';
import Notifier from '@/components/Notifier/Notifier';
import { useSelector } from 'react-redux';
import { isNotifierShown } from '@/modules/ui/uiSlice';

function App() {
  const isNotify = useSelector(isNotifierShown);
  return (
    <>
      {isNotify && <Notifier />}
      <BaseRouter />
    </>
  );
}

export default App;
