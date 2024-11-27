import React, { useState } from 'react';
import YearBox from '@components/Home/HomeMain/YearBox/YearBox';
import HomeSidebar from '@components/Home/HomeMain/HomeSidebar/HomeSidebar';
import TrashBox from '@components/Home/HomeMain/TrashBox/TrashBox';
import { Stack, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { PropaneSharp, TornadoSharp } from '@mui/icons-material';
import { CourseData, MyCourseData, CreateCourseData } from '@/modules/course/types';

type Props = {
  userId: number;
  allCourses: CourseData[];
  myCourses: MyCourseData[];
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
};

const HomeMain = (props: Props) => {
  const [numOfYears, setNumOfYears] = useState<number>(4);
  const [addIsHovered, setAddIsHovered] = useState<boolean>(false);
  const [removeIsHovered, setRemoveIsHovered] = useState<boolean>(false);
  const units = 0;
  const handleAdd = () => {
    if (numOfYears < 6) {
      setNumOfYears(numOfYears + 1);
    }
    setAddIsHovered(false);
  };

  const handleRemove = () => {
    removeYear(numOfYears);
    if (numOfYears > 1) {
      setNumOfYears(numOfYears - 1);
    }
    setRemoveIsHovered(false);
  };

  const removeYear = (year: number) => {
    // go through myCourses, check to see if myCourses.yearQuarter's first digit === Number(year)
    // if true, call handleDeleteCourse using that myCourses element's course code (myCourses.code)
    props.myCourses.forEach(course => {
      const courseYear = Math.floor(course.yearQuarter / 10); // two digit, floor 10 gets year

      // delete course from myCourses
      if (courseYear === year) {
        props.handleDeleteCourse(course.code);
      }
    });
      
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
            myCourses={props.myCourses}
            userId={props.userId}
            handleAddCourse={props.handleAddCourse}
            handleDeleteCourse={props.handleDeleteCourse}
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
      <TrashBox 
        handleAddCourse={handleAddCourse}
        handleDeleteCourse={handleDeleteCourse}
      />
    </>
  );
};

export default HomeMain;
