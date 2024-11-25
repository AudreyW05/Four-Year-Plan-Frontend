import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';

import { Box, Typography } from '@mui/material';

type Props = {
  year: string;
  quarter: string;
  classes: { [year: string]: { [quarter: string]: string[] } };
  setClasses: React.Dispatch<React.SetStateAction<{ [year: string]: { [quarter: string]: string[] } }>>;
};


const QuarterBox = (props: Props) => {

 

  return (
    <Box className='m-2 space-y-1'>
      <Typography className='font-Inter bg-bgGray text-textGray pb-2' align='left'>
        {props.quarter}
      </Typography>
      <ClassBox 
        year={props.year} 
        quarter={props.quarter} 
        classes={props.classes}
        setClasses={props.setClasses}
      ></ClassBox>
    </Box>
  );
};


export default QuarterBox;
