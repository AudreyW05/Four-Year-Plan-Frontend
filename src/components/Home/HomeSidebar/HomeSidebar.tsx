import React, { useState } from 'react';
import ClassCategories from './ClassCategories/ClassCategories';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HomeSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className='flex mt-24'>
      <IconButton
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        className='mr-2 ml-4 mt-1'
        sx={[open && { display: 'none' }]}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant='persistent'
        open={open}
        className='top-24 z-0'
        sx={{
          '& .MuiDrawer-paper': {
            top: '82px', // Also apply this to the Drawer paper itself
          },
        }}
      >
        <Box className='flex-col w-64'>
          <Box className='flex items-center px-2 my-4 justify-end'>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <ClassCategories sectname={'Lower Division'}></ClassCategories>
          <ClassCategories sectname={'Upper Division'}></ClassCategories>
          <ClassCategories sectname={'Math'}></ClassCategories>
          <ClassCategories sectname={'Physics'}></ClassCategories>
          <ClassCategories sectname={'GEs'}></ClassCategories>
          <ClassCategories sectname={'Others'}></ClassCategories>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomeSidebar;
