import React, { useState } from 'react';
import Settings from '@components/Home/Settings/Settings';

import { AppBar, Grid, Typography, Box } from '@mui/material';

const HomeHeader = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <AppBar elevation={0} className='bg-bgWhite w-screen bg-bgGray shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] z-20' position='fixed'>
        <Grid container className='w-screen h-20 items-center flex' direction='row'>
          <Typography className='text-bgBlack font-inter text-lg pl-10 w-1/2'>Course Planner</Typography>
          <div className='justify-end w-1/2'>
            <Box
              className='flex bg-uclaBlue text-white rounded-full justify-center items-center w-12 h-12 cursor-pointer mr-10 float-right'
              onClick={handleShowSettings}
            >
              <p className='font-Inter'>AW</p> {/* Placeholder initials */}
            </Box>
          </div>
        </Grid>
      </AppBar>
      {showSettings && <Settings onClose={handleShowSettings} />}
    </>
  );
};

export default HomeHeader;
