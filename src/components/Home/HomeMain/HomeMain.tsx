import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeMain/HomeSidebar/HomeSidebar';
import { Box, Stack } from '@mui/material';

const HomeMain = () => {
  return (
    <Stack direction='row' className='z-0'>
      <HomeSidebar />
      <Stack className='mt-24'>
        <YearBox year='1' />
        <YearBox year='2' />
        <YearBox year='3' />
        <YearBox year='4' />
      </Stack>
    </Stack>
  );
};

export default HomeMain;
