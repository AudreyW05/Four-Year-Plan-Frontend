import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import TrashBox from '@components/Home/HomeMain/TrashBox/TrashBox';
import { Box } from '@mui/material'; 

const HomeMain = () => {
  return (  
    <>
      <Box className='flex flex-col my-3 mt-24'> 
        <YearBox year='1'/>
        <YearBox year='2'/>
        <YearBox year='3'/>
        <YearBox year='4'/>
      </Box>
      <TrashBox/>
    </>
  );
};

export default HomeMain;
