import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';
import { CourseData, MyCourseData, CreateCourseData } from '@/modules/course/types';
import { Box, Typography } from '@mui/material';

type Props = {
  year: string;
  quarter: string;
  myCourses: MyCourseData[];
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
};


const QuarterBox = (props: Props) => {


  return (
    <Box className='flex-1 m-2 space-y-1'>
      <Typography className='font-Inter bg-bgGray text-textGray pb-2' align='left'>
        {props.quarter}
      </Typography>
      <ClassBox 
        year={props.year} 
        quarter={props.quarter} 
        myCourses={props.myCourses}
        userId={props.userId}
        handleAddCourse={props.handleAddCourse}
        handleDeleteCourse={props.handleDeleteCourse}
      >
      </ClassBox>
    </Box>
  );
};


export default QuarterBox;
