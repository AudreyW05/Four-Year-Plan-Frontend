import React, { useEffect, useRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, FormControlLabel, Checkbox } from '@mui/material';

type Props = {
  onClose: () => void;
};

const Settings = (props: Props) => {
  const scroll = 'paper';

  const handleClose = () => {
    props.onClose();
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
      scroll={scroll}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
      maxWidth='md'
      fullWidth={true}
    >
      <DialogTitle id='scroll-dialog-title' className='flex justify-between items-center'>
        <span>Settings</span>
        <Button onClick={handleClose}>Sign Out</Button>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
          <div className='space-y-6'>
            <div>
              <h2 className='text-lg font-semibold'>Lower Divs</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='Com Sci 1' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 31' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 32' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 33' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 35L' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M51A' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Upper Divs</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='Com Sci 111' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 118' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 130' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 131' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 180' />
                <FormControlLabel control={<Checkbox />} label='Com Sci 181' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M151B' />
                <FormControlLabel control={<Checkbox />} label='Com Sci M152A' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Math</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='Math 31A' />
                <FormControlLabel control={<Checkbox />} label='Math 31B' />
                <FormControlLabel control={<Checkbox />} label='Math 32A' />
                <FormControlLabel control={<Checkbox />} label='Math 32B' />
                <FormControlLabel control={<Checkbox />} label='Math 33A' />
                <FormControlLabel control={<Checkbox />} label='Math 33B' />
                <FormControlLabel control={<Checkbox />} label='Math 61' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Physics</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='Physics 1A' />
                <FormControlLabel control={<Checkbox />} label='Physics 1B' />
                <FormControlLabel control={<Checkbox />} label='Physics 1C' />
                <FormControlLabel control={<Checkbox />} label='Physics 4AL/4BL' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Probability</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='Probability' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>CS Electives</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='CS Elective 1' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 2' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 3' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 4' />
                <FormControlLabel control={<Checkbox />} label='CS Elective 5' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>General Education</h2>
              <div className='grid grid-cols-4 gap-4 mt-4 mx-6'>
                <FormControlLabel control={<Checkbox />} label='GE 1' />
                <FormControlLabel control={<Checkbox />} label='GE 2' />
                <FormControlLabel control={<Checkbox />} label='GE 3' />
                <FormControlLabel control={<Checkbox />} label='GE 4' />
                <FormControlLabel control={<Checkbox />} label='GE 5' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Technical Breadth</h2>
              <div className='grid grid-cols-4 gap-4 mt-4'>
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 1' />
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 2' />
                <FormControlLabel control={<Checkbox />} label='Tech Breadth 3' />
              </div>
            </div>

            <div>
              <h2 className='text-lg font-semibold'>Science and Technology</h2>
              <div className='grid grid-cols-4 gap-4 mt-4'>
                <FormControlLabel control={<Checkbox />} label='Sci Tech 1' />
                <FormControlLabel control={<Checkbox />} label='Sci Tech 2' />
                <FormControlLabel control={<Checkbox />} label='Sci Tech 3' />
              </div>
            </div>
          </div>
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
