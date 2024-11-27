import React, { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from '@mui/material';

import AuthService from '@/api/auth/AuthService';
import { Category, CourseData, CreateCourseData, MyCourseData } from '@/modules/course/types';

import { useApi } from '@/api/ApiHandler';
import UserService from '@/api/user/UserService';

import { useNavigate } from 'react-router-dom'; // React Router for navigation

type Props = {
  onClose: () => void;
  allCourses: CourseData[];
  myCourses: MyCourseData[];
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
};

const Settings = (props: Props) => {
  const navigate = useNavigate();

  // State to keep track of the checked courses
  const [checkedCourses, setCheckedCourses] = useState<Record<string, boolean>>({});
  const [initial, setInitial] = useState<Record<string, boolean>>({});

  // Handle the checkbox change
  const handleCheckboxChange = (courseCode: string) => {
    setCheckedCourses(prevCheckedCourses => ({
      ...prevCheckedCourses,
      [courseCode]: !prevCheckedCourses[courseCode],
    }));
  };

  const handleSave = async () => {
    // Using a for...of loop to handle async calls sequentially
    for (const [courseCode, isChecked] of Object.entries(checkedCourses)) {
      if (isChecked) {
        if (!(courseCode in initial)) {
          props.handleAddCourse({ code: courseCode, year: 1, quarter: 0 });
        }
      }
      if (!isChecked) {
        if (courseCode in initial) {
          props.handleDeleteCourse(courseCode);
        }
      }
    }
    props.onClose();
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (descriptionElementRef.current !== null) {
      descriptionElementRef.current.focus();
    }
  }, []);

  // Set the initial checked state based on myCourses prop
  useEffect(() => {
    const initialCheckedState: Record<string, boolean> = {};

    props.myCourses
      .filter(course => course.yearQuarter === 10)
      .forEach(course => {
        initialCheckedState[course.code] = true; // Mark courses in myCourses as checked
      });
    setCheckedCourses(initialCheckedState);
    setInitial(initialCheckedState);
  }, [props.myCourses]);

  return (
    <Dialog
      open={true}
      onClose={() => props.onClose()}
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
      maxWidth='md'
      fullWidth
    >
      <DialogTitle id='scroll-dialog-title' className='flex justify-between items-center'>
        <span>Settings</span>
        <Button
          onClick={() => {
            AuthService.logout();
            navigate('/authentication/login');
          }}
        >
          Sign Out
        </Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
          <Box display='flex' flexDirection='column' gap={4}>
            {['LOWER_DIV', 'UPPER_DIV', 'MATH', 'PHYSICS', 'GE', 'OTHER'].map(category => (
              <Box key={category}>
                <Typography variant='h6' gutterBottom fontWeight='bold'>
                  {category.replace('_', ' ')}
                </Typography>
                <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                  {props.allCourses
                    .filter(course => course.category === Category[category as keyof typeof Category])
                    .map(course => (
                      <FormControlLabel
                        key={course.code}
                        control={
                          <Checkbox
                            checked={checkedCourses[course.code] || false} // Use checked state
                            onChange={() => handleCheckboxChange(course.code)} // Toggle checked state
                          />
                        }
                        label={course.code}
                      />
                    ))}
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
