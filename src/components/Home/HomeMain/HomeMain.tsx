import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeMain/HomeSidebar/HomeSidebar';
import TrashBox from '@components/Home/HomeMain/TrashBox/TrashBox';
import { Stack, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { TornadoSharp } from '@mui/icons-material';
import { CourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  allCourses: CourseData[];
  myCourses: MyCourseData[];
};

const HomeMain = (props: Props) => {
  const [numOfYears, setNumOfYears] = useState<number>(4);
  const [addIsHovered, setAddIsHovered] = useState<boolean>(false);
  const [removeIsHovered, setRemoveIsHovered] = useState<boolean>(false);

  // Global state for units across all years and quarters
  const [units, setUnits] = useState<{ [key: string]: { [quarter: string]: number[] } }>({
    '1': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '2': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '3': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '4': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '5': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '6': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
  });
  // Global state for classes across all years and quarters
  const [classes, setClasses] = useState<{ [key: string]: { [quarter: string]: string[] } }>({
    '1': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '2': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '3': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '4': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '5': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
    '6': { 'Fall Quarter': [], 'Winter Quarter': [], 'Spring Quarter': [], 'Summer Quarter': [] },
  });

  const handleAdd = () => {
    if (numOfYears < 6) {
      setNumOfYears(numOfYears + 1);
    }
    setAddIsHovered(false);
  };

  const handleRemove = () => {
    removeYear(String(numOfYears));
    if (numOfYears > 1) {
      setNumOfYears(numOfYears - 1);
    }
    setRemoveIsHovered(false);
  };

  const removeYear = (year: string) => {
    // Clear classes for the entire year across all quarters
    setClasses(prevClasses => ({
      ...prevClasses,
      [year]: {
        'Fall Quarter': [], // Reset classes for Fall Quarter
        'Winter Quarter': [], // Reset classes for Winter Quarter
        'Spring Quarter': [], // Reset classes for Spring Quarter
        'Summer Quarter': [], // Reset classes for Summer Quarter
      },
    }));

    // Clear units for the entire year across all quarters
    setUnits(prevUnits => ({
      ...prevUnits,
      [year]: {
        'Fall Quarter': [0, 0, 0, 0], // Reset units for Fall Quarter (set to zeros)
        'Winter Quarter': [0, 0, 0, 0], // Reset units for Winter Quarter (set to zeros)
        'Spring Quarter': [0, 0, 0, 0], // Reset units for Spring Quarter (set to zeros)
        'Summer Quarter': [0, 0, 0, 0], // Reset units for Summer Quarter (set to zeros)
      },
    }));
  };

  return (
    <>
      <Stack direction='row' className='w-full'>
        <HomeSidebar units={units} allCourses={props.allCourses} myCourses={props.myCourses} />
        <Stack className='mt-24 w-full items-center justify-center'>
          {/* Classes will be rendered based on numOfClasses */}
          {[...Array(numOfYears)].map((_, index) => (
            <YearBox
              key={index}
              year={(index + 1).toString()}
              classes={classes} // Pass the global classes state
              units={units} // Pass the global units state
              setClasses={setClasses} // Pass the function to update the global classname state
              setUnits={setUnits} // Pass the function to update global units
            />
          ))}
          <Stack direction='row' className='space-x-4 mb-4 mt-2'>
            {/* Add Box */}
            {numOfYears < 6 && (
              <Box onClick={() => handleAdd()} onMouseEnter={() => setAddIsHovered(true)} onMouseLeave={() => setAddIsHovered(false)}>
                {addIsHovered ? <AddCircleIcon className='text-textGray' /> : <AddCircleOutlineIcon className='text-textGray' />}
              </Box>
            )}
            {/* Remove Box */}
            {numOfYears > 1 && (
              <Box
                onClick={() => handleRemove()}
                onMouseEnter={() => setRemoveIsHovered(true)}
                onMouseLeave={() => setRemoveIsHovered(false)}
              >
                {removeIsHovered ? <RemoveCircleIcon className='text-textGray' /> : <RemoveCircleOutlineIcon className='text-textGray' />}
              </Box>
            )}
          </Stack>
        </Stack>
      </Stack>
      <TrashBox setClasses={setClasses} setUnits={setUnits} />
    </>
  );
};

export default HomeMain;
