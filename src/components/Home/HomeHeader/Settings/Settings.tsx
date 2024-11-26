import React, { useEffect, useRef } from 'react';
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
import { Category, CourseData } from '@/modules/course/types';

type Props = {
  onClose: () => void;
  allCourses: CourseData[];
};

const Settings = (props: Props) => {
  const handleClose = () => {
    props.onClose();
    AuthService.logout();
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (descriptionElementRef.current !== null) {
      descriptionElementRef.current.focus();
    }
  }, []);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
      maxWidth='md'
      fullWidth
    >
      <DialogTitle id='scroll-dialog-title' className='flex justify-between items-center'>
        <span>Settings</span>
        <Button onClick={handleClose}>Sign Out</Button>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
          <Box display='flex' flexDirection='column' gap={4}>
            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Lower Divs
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.LOWER_DIV)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Upper Divs
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.UPPER_DIV)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Math
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.MATH)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Physics
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.PHYSICS)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>
            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                General Education
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.GE)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Other
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                {props.allCourses
                  .filter(course => course.category === Category.OTHER)
                  .map(course => (
                    <FormControlLabel key={course.code} control={<Checkbox />} label={course.code} />
                  ))}
              </Box>
            </Box>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
