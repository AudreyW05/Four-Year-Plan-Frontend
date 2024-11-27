// YearBox.tsx
import React, { useState } from 'react';
import QuarterBox from '@components/Home/HomeMain/YearBox/QuarterBox/QuarterBox';
import { Box, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { CreateCourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  year: string;
  myCourses: MyCourseData[];
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
};

const YearBox = (props: Props) => {
  // Initial quarters without "Summer"
  const [quarters, setQuarters] = useState<string[]>(['Fall Quarter', 'Winter Quarter', 'Spring Quarter']);
  const [showSummer, setShowSummer] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);

  // Toggle function to add or remove "Summer"
  const toggleSummer = () => {
    setShowSummer(!showSummer);
    if (!showSummer) {
      setQuarters([...quarters, 'Summer Quarter']);
    } else {
      setQuarters(quarters.filter(quarter => quarter !== 'Summer Quarter'));
    }
  };

  const removeQuarter = (year: string) => {
    // similar to removeYear in HomeMain.tsx, but removing a specific year's summer quarter
    props.myCourses.forEach(course => {
      const courseYear = Math.floor(course.yearQuarter / 10);
      const courseQuarter = course.yearQuarter % 10; // if 4, summer quarter

      if (courseYear === Number(year) && courseQuarter === 4) {
        // if course is in year's summer quarter, remove
        props.handleDeleteCourse(course.code);
      }
    });
  };

  const handleClick = () => {
    if (showSummer) {
      removeQuarter(props.year);
    }
    toggleSummer();
    setIsHovered(false);
  };

  return (
    <Box className='font-Inter bg-bgGray text-textGray justify-center w-fit p-2 rounded-lg shadow-sm mx-4 my-2'>
      {/* Year # on top */}
      <Typography className='font-Inter flex-shrink-0 mb-1 text-left pl-3 pt-3' variant='h5' align='center'>
        Year {props.year}
      </Typography>

      {/* QuarterBoxes will flex here */}
      <Box className='bg-bgGray text-textGray flex flex-row items-center gap-1 justify-between w-full'>
        {quarters.map((quarter, _) => (
          <QuarterBox
            key={quarter}
            year={props.year}
            quarter={quarter}
            myCourses={props.myCourses}
            userId={props.userId}
            handleAddCourse={props.handleAddCourse}
            handleDeleteCourse={props.handleDeleteCourse}
          />
        ))}
        <Box onClick={() => handleClick()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {!isHovered ? (
            showSummer ? (
              <RemoveCircleOutlineIcon className='text-textGray' />
            ) : (
              <AddCircleOutlineIcon className='text-textGray' />
            )
          ) : showSummer ? (
            <RemoveCircleIcon className='text-textGray' />
          ) : (
            <AddCircleIcon className='text-textGray' />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default YearBox;
