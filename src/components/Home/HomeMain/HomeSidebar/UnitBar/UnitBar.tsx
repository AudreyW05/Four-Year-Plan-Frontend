import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

type Props = {
  value: number;
};

const UnitBar: React.FC<Props> = ({ value }) => {
  const progress = value;

  return (
    <Box display='flex' alignItems='center' flexDirection='column' width='100%' className='mb-6'>
      <Typography variant='body1' mb={1}>
        Total Units: {value}
      </Typography>
      <Box width='80%'>
        <LinearProgress variant='determinate' value={progress} />
      </Box>
    </Box>
  );
};

export default UnitBar;
