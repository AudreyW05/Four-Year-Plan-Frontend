import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeSidebar/HomeSidebar';

const HomeMain = () => {
  return (
    <>
      <HomeSidebar></HomeSidebar>
      <YearBox></YearBox>
      <YearBox></YearBox>
      <YearBox></YearBox>
    </>
  );
};

export default HomeMain;
