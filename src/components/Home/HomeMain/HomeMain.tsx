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
import { CourseData, CreateCourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  allCourses: CourseData[];
  myCourses: MyCourseData[];
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
};

const HomeMain = (props: Props) => {
  const [numOfYears, setNumOfYears] = useState<number>(4);
  const [addIsHovered, setAddIsHovered] = useState<boolean>(false);
  const [removeIsHovered, setRemoveIsHovered] = useState<boolean>(false);

  const handleAdd = () => {
    if (numOfYears < 6) {
      setNumOfYears(numOfYears + 1);
    }
    setAddIsHovered(false);
  };

  const handleRemove = () => {
    // removeYear(String(numOfYears));
    if (numOfYears > 1) {
      setNumOfYears(numOfYears - 1);
    }
    setRemoveIsHovered(false);
  };

  // const removeYear = (year: string) => {};

  return (
    <>
      <Stack direction='row' className='w-full'>
        <HomeSidebar
          units={props.myCourses.reduce((total, course) => {
            return total + course.units;
          }, 0)}
          allCourses={props.allCourses}
          myCourses={props.myCourses}
        />
        <Stack className='mt-24 w-full items-center justify-center'>
          {/* Classes will be rendered based on numOfClasses */}
          {[...Array(numOfYears)].map((_, index) => (
            <YearBox
              key={index}
              handleAddCourse={props.handleAddCourse}
              handleDeleteCourse={props.handleDeleteCourse}
              year={(index + 1).toString()}
              courses={props.myCourses.filter(course => course.yearQuarter / 10 == index)} // Pass the global classes state
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
      <TrashBox handleAddCourse={props.handleAddCourse} handleDeleteCourse={props.handleDeleteCourse} myCourses={props.myCourses} />
    </>
  );
};

export default HomeMain;
