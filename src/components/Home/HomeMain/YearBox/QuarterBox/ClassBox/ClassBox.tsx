import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

interface ClassBoxProps {
  quarterName: string; // Name of the quarter
}

const ClassBox: React.FC<ClassBoxProps> = ({ quarterName }) => {
  return (
    <Box
      className='bg-bgGray'
      display='flex'
      flexDirection='column'
      alignItems='center'
      border='1px dashed #404040'
      borderRadius={2}
      padding={2}
      gap={2}
    >
      {/* 2x2 Grid for storing classes */}
      <Grid container spacing={1}>
        {/* Class 1 */}
        <Grid item xs={6}>
          <Paper className='font-Inter bg-bgGray text-textGray p-4 text-center min-h-[50px]' elevation={2}>
            <Typography variant='body2'>Class 1</Typography>
          </Paper>
        </Grid>

        {/* Class 2 */}
        <Grid item xs={6}>
          <Paper className='font-Inter bg-bgGray text-textGray p-4 text-center min-h-[50px]' elevation={2}>
            <Typography variant='body2'>Class 2</Typography>
          </Paper>
        </Grid>

        {/* Class 3 */}
        <Grid item xs={6}>
          <Paper className='font-Inter bg-bgGray text-textGray p-4 text-center min-h-[50px]' elevation={2}>
            <Typography variant='body2'>Class 3</Typography>
          </Paper>
        </Grid>

        {/* Class 4 */}
        <Grid item xs={6}>
          <Paper className='font-Inter bg-bgGray text-textGray p-4 text-center min-h-[50px]' elevation={2}>
            <Typography variant='body2'>Class 4</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassBox;
