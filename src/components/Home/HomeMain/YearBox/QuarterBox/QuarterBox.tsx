import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';

import { Box, Typography } from '@mui/material'

interface QuarterBoxProps {
  quarter: string;
}

const QuarterBox: React.FC<QuarterBoxProps> = ({ quarter }) => {
  return (
    <Box
      sx={{
        margin: 2,
        border: "1px solid none",
        borderColor: "primary.main",
        borderRadius: 1,
        textAlign: "center",
      }}
    >
      <Typography className="font-Inter bg-bgGray text-textGray" align="left">{quarter}</Typography>
      <ClassBox quarterName={quarter}></ClassBox>
    </Box>
  );
};

export default QuarterBox;
