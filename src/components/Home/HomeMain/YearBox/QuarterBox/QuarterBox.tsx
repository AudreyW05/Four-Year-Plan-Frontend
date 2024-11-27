import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';
import { Box, Typography } from '@mui/material';
import { CreateCourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  year: string;
  quarter: string;
  myCourses: MyCourseData[];
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
  handleMoveCourse: (data: CreateCourseData) => void;
};

const QuarterBox = (props: Props) => {
  let quarterNum: number;
    if (props.quarter === "Fall Quarter") {
      quarterNum = 1;
    } else if (props.quarter === "Winter Quarter") {
      quarterNum = 2;
    } else if (props.quarter === "Spring Quarter") {
      quarterNum = 3;
    } else { // Summer Quarter
      quarterNum = 4;
    } 
  return (
    <Box className='flex-1 m-2 space-y-1'>
      <Typography className='font-Inter bg-bgGray text-textGray pb-2' align='left'>
        {props.quarter}
      </Typography>
      <ClassBox
        year={props.year}
        quarter={props.quarter}
        quarterNum={quarterNum}
        myCourses={props.myCourses.filter(course => course.yearQuarter % 10 === quarterNum)} // filter by quarter
        userId={props.userId}
        handleAddCourse={props.handleAddCourse}
        handleDeleteCourse={props.handleDeleteCourse}
        handleMoveCourse={props.handleMoveCourse}
      ></ClassBox>
    </Box>
  );
};

export default QuarterBox;
