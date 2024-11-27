import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '@/api/ApiHandler';
import { retrieveAllData } from '@/utils/api';

import { getCurrentUser, updateCurrentUser } from '@/modules/user/userSlice';
import { toggleShowNotification } from '@/modules/ui/uiSlice';
import { severity } from '@/constants/constants';

import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import HomeMain from '@/components/Home/HomeMain/HomeMain';

import { useSelector } from 'react-redux';
import { getCurrentUser } from '@/modules/user/userSlice';

import CourseService from '@/api/course/CourseService';
import UserService from '@/api/user/UserService';

import { CourseData, CreateCourseData, MyCourseData } from '@/modules/course/types';

const Home = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <main>
        <HomeMain />
      </main>
    </>
  );
};

export default Home;
