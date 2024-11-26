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
                <FormControlLabel control={<Checkbox />} label='Com Sci 1' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 31' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 32' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 33' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 35L' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M51A' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Upper Divs
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Com Sci 111' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 118' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 130' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 131' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 180' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 181' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M151B' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M152A' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Math
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Math 31A' />
                <FormControlLabel control={<Checkbox />} label='Math 31B' />
                <FormControlLabel control={<Checkbox />} label='Math 32A' />
                <FormControlLabel control={<Checkbox />} label='Math 32B' />
                <FormControlLabel control={<Checkbox />} label='Math 33A' />
                <FormControlLabel control={<Checkbox />} label='Math 33B' />
                <FormControlLabel control={<Checkbox />} label='Math 61' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Physics
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Physics 1A' />
                <FormControlLabel control={<Checkbox />} label='Physics 1B' />
                <FormControlLabel control={<Checkbox />} label='Physics 1C' />
                <FormControlLabel control={<Checkbox />} label='Physics 4AL/4BL' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Probability
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Probability' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                CS Electives
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='CS Elective 1' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 2' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 3' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 4' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 5' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                General Education
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='GE 1' />
                <FormControlLabel control={<Checkbox />} label='GE 2' />
                <FormControlLabel control={<Checkbox />} label='GE 3' />
                <FormControlLabel control={<Checkbox />} label='GE 4' />
                <FormControlLabel control={<Checkbox />} label='GE 5' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Tech Breadth
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 1' />
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 2' />
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 3' />
              </Box>
            </Box>

            <Box>
              <Typography variant='h6' gutterBottom fontWeight='bold'>
                Science and Technology
              </Typography>
              <Box display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2}>
                <FormControlLabel control={<Checkbox />} label='Sci Tech 1' />
                <FormControlLabel control={<Checkbox />} label='Sci Tech 2' />
                <FormControlLabel control={<Checkbox />} label='Sci Tech 3' />
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
