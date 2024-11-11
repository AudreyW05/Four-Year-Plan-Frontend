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
  const [numOfClasses, setClasses] = useState<number>(4);
  const [addIsHovered, setAddIsHovered] = useState<boolean>(false);
  const [removeIsHovered, setRemoveIsHovered] = useState<boolean>(false);
  const handleAdd = () => {
    if (numOfClasses < 6) {
      setClasses(numOfClasses + 1);
    }
  }
  const handleRemove = () => {
    if (numOfClasses > 1) {
      setClasses(numOfClasses - 1);
    }
  }
  return (
    <>
      <Stack direction='row' className='w-full'>
        <HomeSidebar />
        <Stack className='mt-24 w-full items-center justify-center'>
          {/* Classes will be rendered based on numOfClasses */}
          {[...Array(numOfClasses)].map((_, index) => (
            <YearBox key={index} year={(index + 1).toString()} />
          ))}
          <Stack direction='row' className='space-x-4 mb-4 mt-2'>
            {/* Add Box */}
            {numOfClasses < 6 && (
            <Box
              onClick={() => {
               handleAdd(), setAddIsHovered(false);
              }}
              onMouseEnter={() => setAddIsHovered(true)}
              onMouseLeave={() => setAddIsHovered(false)}
            >
              {addIsHovered ? (
                <AddCircleIcon className='text-textGray' />
              ) : (
                <AddCircleOutlineIcon className='text-textGray' />
              )}
            </Box>
            )}
            {/* Remove Box */}
            {numOfClasses > 1 && (
            <Box
              onClick={() => {
               handleRemove(), setRemoveIsHovered(false);
              }}
              onMouseEnter={() => setRemoveIsHovered(true)}
              onMouseLeave={() => setRemoveIsHovered(false)}
            >
              {removeIsHovered ? (
                <RemoveCircleIcon className='text-textGray' />
              ) : (
                <RemoveCircleOutlineIcon className='text-textGray' />
              )}
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
