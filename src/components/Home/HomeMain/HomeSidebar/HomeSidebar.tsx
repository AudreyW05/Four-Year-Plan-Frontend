import React, { useState } from 'react';
import ClassCategories from './ClassCategories/ClassCategories';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import UnitBar from './UnitBar/UnitBar';

const HomeSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={`mt-24 ${open ? 'ml-64' : 'ml-2 pr-10'}`} overflow={'auto'}>
      {!open && (
        <IconButton
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className='fixed top-24 left-4 hover:text-uclaBlue'
          disableRipple
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant='persistent'
        open={open}
        className='top-24 z-0'
        sx={{
          '& .MuiDrawer-paper': {
            zIndex: 0, // Set z-index to 0
            top: '82px', // Also apply this to the Drawer paper itself
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          },
        }}
      >
        <Box className='flex-col w-64' display={'flex'} flexDirection={'column'} height={'88%'}>
          <Box className='flex items-center px-2 my-4 justify-end' overflow={'auto'}>
            <IconButton onClick={handleDrawerClose} disableRipple disableTouchRipple>
              <ChevronLeftIcon className='hover:text-uclaBlue' />
            </IconButton>
          </Box>
          <Box flexGrow={1} overflow={'auto'}>
            <ClassCategories sectname={'Lower Division'}></ClassCategories>
            <ClassCategories sectname={'Upper Division'}></ClassCategories>
            <ClassCategories sectname={'Math'}></ClassCategories>
            <ClassCategories sectname={'Physics'}></ClassCategories>
            <ClassCategories sectname={'GEs'}></ClassCategories>
            <ClassCategories sectname={'Others'}></ClassCategories>
          </Box>
          <Box mt={1}>
            <UnitBar value={50}></UnitBar>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomeSidebar;
