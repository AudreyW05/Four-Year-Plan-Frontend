import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';

import { Box, Typography } from '@mui/material';

type Props = {
  year: string;
  quarter: string;
  classes: { [year: string]: { [quarter: string]: string[] } };
  units: { [year: string]: { [quarter: string]: number[] } };
  setClasses: React.Dispatch<React.SetStateAction<{ [year: string]: { [quarter: string]: string[] } }>>;
  setUnits: React.Dispatch<React.SetStateAction< { [year: string]: { [quarter: string]: number[] } } >>;
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
        units={props.units}
        setClasses={props.setClasses}
        setUnits={props.setUnits}
      ></ClassBox>
    </Box>
  );
};


export default QuarterBox;
