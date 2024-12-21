import React, { useState, useEffect } from 'react';
import ClassCategories from './ClassCategories/ClassCategories';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import UnitBar from './UnitBar/UnitBar';
import { CourseData, MyCourseData, Category } from '@/modules/course/types';

type Props = {
  units: number;
  allCourses: CourseData[];
  myCourses: MyCourseData[];
};

const HomeSidebar = (props: Props) => {
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
            {['LOWER_DIV', 'UPPER_DIV', 'MATH', 'PHYSICS', 'GE', 'OTHER'].map(category => (
              <ClassCategories
                key={category}
                sectname={category}
                classes={props.allCourses
                  .filter(allCourses => !props.myCourses.some(course => allCourses.code === course.code))
                  .filter(course => course.category === Category[category as keyof typeof Category])}
              />
            ))}
          </Box>
          <Box mt={1}>
            <UnitBar value={props.units}></UnitBar>
f          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomeSidebar;
