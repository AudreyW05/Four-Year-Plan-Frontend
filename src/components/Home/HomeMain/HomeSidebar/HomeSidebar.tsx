import React, { useState, useEffect } from 'react';
import ClassCategories from './ClassCategories/ClassCategories';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import UnitBar from './UnitBar/UnitBar';
import { Category } from '@mui/icons-material';

type Props = {
  units: { [year: string]: { [quarter: string]: number[] } };
}

const HomeSidebar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [totalSum, setTotalSum] = useState<number>(0);
  


  const [classData, setClassData] = useState<{ 
    [sectname: string]: [string, number][]
  }> ({
  "Lower Division": [ ["CS31", 3], ["CS32", 4] ],
  "Upper Division": [ ["CS180", 4], ["CS111", 3] ],
  "Math": [ ["Math33A", 3], ["Math33B", 3] ],
  "Physics": [ ["Physics1A", 3], ["Physics1B", 3] ],
  "GEs": [ ["Anthro1", 3], ["Sociology1", 3] ],
  "Others": [ ["Audrey Wong from Beijing China", 0], ["Music1", 3] ]
  });

  const removeClass = (className: string, sectName: string) => {
    const updatedClassData = {...classData};

    updatedClassData[sectName] = updatedClassData[sectName].filter(([classNameInCategory, units]) => classNameInCategory !== className)

    setClassData(updatedClassData);
  };

  const sumUnits = ( units: { [year: string]: { [quarter: string]: number[] } }) => {
    let totalUnits = 0;
    // Iterate over years
    for (const year in units) {
      // Iterate over quarters
      for (const quarter in units[year]) {
        // Sum up the values in the number[] array for the current quarter
        totalUnits += units[year][quarter].reduce((acc, value) => acc + value, 0);
      }
    }
  
    return totalUnits;
  };

  useEffect(() => {
    const sum = sumUnits(props.units);
    setTotalSum(sum);
  }, [props.units]); 

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
          {Object.entries(classData).map(([category, allclass]) => (<ClassCategories 
          key={category} 
          sectname={category} 
          class={allclass} 
          onRemoveClass= {removeClass}
          />))}
          </Box>
          <Box mt={1}>
            <UnitBar value={totalSum}></UnitBar>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HomeSidebar;
