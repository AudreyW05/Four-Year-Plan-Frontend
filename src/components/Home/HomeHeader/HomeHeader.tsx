import React, { useState } from 'react';
import Settings from '@/components/Home/HomeHeader/Settings/Settings';

import { AppBar, Grid, Typography, Box } from '@mui/material';
import { CourseData, MyCourseData, CreateCourseData } from '@/modules/course/types';
import { UserData } from '@/modules/user/types';

type Props = {
  allCourses: CourseData[];
  myCourses: MyCourseData[];
  userId: number;
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
  email: string;
};

const HomeHeader = (props: Props) => {
  const [showSettings, setShowSettings] = useState(false);

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const profileName = props.currentUser.email ? props.currentUser.email.substring(0, props.currentUser.email.lastIndexOf('@')) : '?';
  const initials =
    profileName.lastIndexOf('.') === -1
      ? profileName.charAt(0).toUpperCase()
      : (profileName.charAt(0) + profileName.charAt(profileName.lastIndexOf('.') + 1)).toUpperCase();

  return (
    <>
      <AppBar elevation={0} className='bg-bgWhite w-screen bg-bgGray shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] z-20' position='fixed'>
        <Grid container className='w-screen h-20 items-center flex' direction='row'>
          <Typography className='text-bgBlack font-inter text-lg pl-10 w-1/2'>Course Planner</Typography>
          <div className='justify-end w-1/2'>
            <Box
              className='flex bg-uclaBlue text-white rounded-full justify-center items-center w-12 h-12 cursor-pointer mr-10 float-right'
              onClick={handleShowSettings}
            >
              <p className='font-Inter'>{initials}</p>
            </Box>
          </div>
        </Grid>
      </AppBar>
      {showSettings && (
        <Settings
          onClose={handleShowSettings}
          allCourses={props.allCourses}
          myCourses={props.myCourses}
          userId={props.userId}
          handleAddCourse={props.handleAddCourse}
          handleDeleteCourse={props.handleDeleteCourse}
        />
      )}
    </>
  );
};

export default HomeHeader;
