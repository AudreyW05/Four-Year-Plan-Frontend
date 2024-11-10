import React from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeMain/HomeSidebar/HomeSidebar';
import { Stack } from '@mui/material';

const HomeMain = () => {
  return (
    <Stack direction='row' className='w-full'>
      <HomeSidebar />
      <Stack className='mt-24 w-full items-center justify-center'>
        <YearBox year='1' />
        <YearBox year='2' />
        <YearBox year='3' />
        <YearBox year='4' />
      </Stack>
    </Stack>
    <TrashBox/>
  );
};

export default HomeMain;
