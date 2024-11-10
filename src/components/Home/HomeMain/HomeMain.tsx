import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import { Box } from '@mui/material'; 

const HomeMain = () => {
  return (  
    <Box className="flex flex-col my-3"> 
      <YearBox year='1'/>
      <YearBox year='2'/>
      <YearBox year='3'/>
      <YearBox year='4'/>
    </Box>
  );
};

export default HomeMain;
