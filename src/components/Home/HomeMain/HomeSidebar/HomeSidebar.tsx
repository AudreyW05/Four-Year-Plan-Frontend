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
    <Box className={`mt-24 ${open ? 'ml-64' : 'ml'}`}>
      <IconButton
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        className='mr-2 ml-4 mt-1 static hover:text-uclaBlue'
        sx={[open && { display: 'none' }]}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant='persistent'
        open={open}
        className='top-24 z-0'
        sx={{
          '& .MuiDrawer-paper': {
            zIndex: 0, // Set z-index to 0
            top: '82px', // Also apply this to the Drawer paper itself
          },
        }}
      >
        <Box className='flex-col w-64'>
          <Box className='flex items-center px-2 my-4 justify-end'>
            <IconButton onClick={handleDrawerClose} disableRipple disableTouchRipple>
              <ChevronLeftIcon className='hover:text-uclaBlue' />
            </IconButton>
          </Box>
          <ClassCategories sectname={'Lower Division'}></ClassCategories>
          <ClassCategories sectname={'Upper Division'}></ClassCategories>
          <ClassCategories sectname={'Math'}></ClassCategories>
          <ClassCategories sectname={'Physics'}></ClassCategories>
          <ClassCategories sectname={'GEs'}></ClassCategories>
          <ClassCategories sectname={'Others'}></ClassCategories>
          <UnitBar value={50}></UnitBar>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomeSidebar;
