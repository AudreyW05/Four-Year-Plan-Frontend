import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';

import { Box, Typography } from '@mui/material';

type Props = {
  quarter: string;
};

const QuarterBox = (props: Props) => {
  return (
    <Box className='m-2'>
      <Typography className='font-Inter bg-bgGray text-textGray pb-2' align='left'>
        {props.quarter}
      </Typography>
      <ClassBox quarterName={props.quarter}></ClassBox>
    </Box>
  );
};

export default QuarterBox;
