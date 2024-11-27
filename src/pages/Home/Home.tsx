import React from 'react';

import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import HomeMain from '@/components/Home/HomeMain/HomeMain';

import { useSelector } from 'react-redux';
import { getCurrentUser } from '@/modules/user/userSlice';

const Home = () => {
  const currentUser = useSelector(getCurrentUser) ?? { id: -1, email: 'q@gmail.com' };

  return (
    <>
      <HomeHeader currentUser={currentUser} />
      <main>
        <HomeMain></HomeMain>
      </main>
    </>
  );
};

export default Home;
