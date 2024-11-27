import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, Button, TextField } from '@mui/material';
import { CourseData, CreateCourseData, MyCourseData } from '@/modules/course/types';

import { useDispatch, UseDispatch } from 'react-redux';
import { toggleShowNotification } from '@/modules/ui/uiSlice';
import { severity } from '@/constants/constants';

type Props = {
  year: string;
  quarter: string; // Name of the quarter
  quarterNum: number; // Number of quarter
  myCourses: MyCourseData[]; // filtered by year and quarter
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
  handleMoveCourse: (data: CreateCourseData) => void;
};

const ClassBox = (props: Props) => {
  const dispatch = useDispatch();

  function handleOnDrop(e: React.DragEvent) {
    console.log('on drop');
    const code = e.dataTransfer.getData('code') as string;
    const fromSidebar = e.dataTransfer.getData('fromSidebar') as string;

    const courseData: CreateCourseData = {
      code: code,
      year: Number(props.year),
      quarter: props.quarterNum,
    }
    if (props.myCourses.length < 5) {
      if (fromSidebar === '1') {
        props.handleAddCourse(courseData);
      }
      else {
        props.handleMoveCourse(courseData); // remove old course from old quarter
      }
    }
    else{
      dispatch(toggleShowNotification({ message: 'Cannot add more than five classes', severity: severity.ERROR }));
    }
  }

  function handleDragOver(e: React.DragEvent) {
    console.log('on drag over');
    e.preventDefault();
  }

  function handleOnDrag(e: React.DragEvent, course: MyCourseData) {
    console.log('on drag');
    e.dataTransfer.setData('code', course.code);
    e.dataTransfer.setData('units', course.units.toString());
    e.dataTransfer.setData('fromSidebar', '0');
  }

  return (
    <Box className='bg-bgGray flex flex-col items-center'>
      {/* Dynamic Grid for classes */}
      <Box className='border border-dashed border-textGray rounded-md p-3 gap-2' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <Grid container rowSpacing={1} columnSpacing={1} spacing={1.5}>
          {Array.from({ length: Math.max(4, props.myCourses.length) }).map((_, index) => (
            <Grid className='justify-items-stretch' item xs={6} md={6} sm={6} key={index}>
              {index < props.myCourses.length ? (
                <Paper
                  className='font-Inter bg-bgGray text-textGray py-4 h-50px w-100px min-w-[90px] whitespace-wrap'
                  elevation={2}
                  draggable
                  onDragStart={e => handleOnDrag(e, props.myCourses[index])}
                >
                  <Typography className='text-center fontsize-10px font-Inter bg-bgGray text-textGray' variant='body2'>
                    {props.myCourses[index].code}
                  </Typography>
                </Paper>
              ) : (
                <Paper
                  className='font-Inter bg-bgGray text-textGray py-4 h-50px w-100px min-w-[90px] whitespace-nowrap opacity-30'
                  elevation={2}
                >
                  <Typography className='text-center fontsize-10px font-Inter bg-bgGray text-textGray' variant='body2'>
                    Empty
                  </Typography>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Classes display */}
      <Box className='flex justify-end w-full'>
        <Typography className='font-Inter text-textGray text-sm pt-2 pb-2'>
          Classes {props.myCourses.length} / Units{' '}
          {props.myCourses.reduce((total, courses) => {
            return total + courses.units;
          }, 0)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassBox;
