import React, { useState } from 'react';
import ClassBox from '@components/Home/HomeMain/YearBox/QuarterBox/ClassBox/ClassBox';

import { Box, Typography } from '@mui/material';
import { CreateCourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  year: string;
  quarter: string;
  courses: MyCourseData[];
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
        courses={props.courses}
        handleAddCourse={props.handleAddCourse}
        handleDeleteCourse={props.handleDeleteCourse}
      ></ClassBox>
    </Box>
  );
};

export default QuarterBox;
