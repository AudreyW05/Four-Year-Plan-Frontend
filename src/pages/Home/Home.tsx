import React from 'react';

import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import HomeSidebar from '@/components/Home/HomeSidebar/HomeSidebar';
import Settings from '@/components/Home/Settings/Settings';
import HomeMain from '@/components/Home/HomeMain/HomeMain';

const Home = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <main>
        <HomeMain></HomeMain>
      </main>
    </>
  );
};

export default Home;
