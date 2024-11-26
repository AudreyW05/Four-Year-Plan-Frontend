import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

type Props = {
  value: number;
};

const UnitBar = (props: Props) => {
  const progress = Math.min((props.value / 180) * 100, 100); // can't go past 100 percent

  return (
    <Box display='flex' alignItems='center' flexDirection='column' width='100%' className='mb-6'>
      <Typography variant='body1' mb={1}>
        Total Units: {props.value}
      </Typography>
      <Box width='80%'>
        <LinearProgress variant='determinate' value={progress} />
      </Box>
    </Box>
  );
};

export default UnitBar;
