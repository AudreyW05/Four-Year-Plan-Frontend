import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeMain/HomeSidebar/HomeSidebar';
import TrashBox from '@components/Home/HomeMain/TrashBox/TrashBox';
import { Stack, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const HomeMain = () => {
  const [numOfYears, setNumOfYears] = useState<number>(4);
  const [addIsHovered, setAddIsHovered] = useState<boolean>(false);
  const [removeIsHovered, setRemoveIsHovered] = useState<boolean>(false);

 // Global state for classes across all years and quarters
 const [classes, setClasses] = useState<{ [key: string]: { [quarter: string]: string[] } }>({
  '1': {
    'Fall Quarter': [],
    'Winter Quarter': [],
    'Spring Quarter': [],
  },
  '2': {
    'Fall Quarter': [],
    'Winter Quarter': [],
    'Spring Quarter': [],
  },
  '3': {
    'Fall Quarter': [],
    'Winter Quarter': [],
    'Spring Quarter': [],
  },
  '4': {
    'Fall Quarter': [],
    'Winter Quarter': [],
    'Spring Quarter': [],
  },
});

  const handleAdd = () => {
    if (numOfYears < 6) {
      setNumOfYears(numOfYears + 1);
    }
  };
  const handleRemove = () => {
    if (numOfYears > 1) {
      setNumOfYears(numOfYears - 1);
    }
  };
  return (
    <>
      <Stack direction='row' className='w-full'>
        <HomeSidebar />
        <Stack className='mt-24 w-full items-center justify-center'>
          {/* Classes will be rendered based on numOfClasses */}
          {[...Array(numOfYears)].map((_, index) => (
            <YearBox 
            key={index} 
            year={(index + 1).toString()}
            classes={classes} // Pass the global classes state
            setClasses={setClasses} // Pass the function to update the global state
            />
          ))}
          <Stack direction='row' className='space-x-4 mb-4 mt-2'>
            {/* Add Box */}
            {numOfYears < 6 && (
              <Box
                onClick={() => {
                  handleAdd(), setAddIsHovered(false);
                }}
                onMouseEnter={() => setAddIsHovered(true)}
                onMouseLeave={() => setAddIsHovered(false)}
              >
                {addIsHovered ? <AddCircleIcon className='text-textGray' /> : <AddCircleOutlineIcon className='text-textGray' />}
              </Box>
            )}
            {/* Remove Box */}
            {numOfYears > 1 && (
              <Box
                onClick={() => {
                  handleRemove(), setRemoveIsHovered(false);
                }}
                onMouseEnter={() => setRemoveIsHovered(true)}
                onMouseLeave={() => setRemoveIsHovered(false)}
              >
                {removeIsHovered ? <RemoveCircleIcon className='text-textGray' /> : <RemoveCircleOutlineIcon className='text-textGray' />}
              </Box>
            )}
          </Stack>
        </Stack>
      </Stack>
      <TrashBox />
    </>
  );
};

export default HomeMain;
