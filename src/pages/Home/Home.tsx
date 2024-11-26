import React, { useState, useEffect } from 'react';

import { useApi } from '@/api/ApiHandler';
import { retrieveAllData } from '@/utils/api';

import { useSelector } from 'react-redux';
import { getCurrentUser } from '@/modules/user/userSlice';

import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import HomeMain from '@/components/Home/HomeMain/HomeMain';

import CourseService from '@/api/course/CourseService';

import { Category, CourseData } from '@/modules/course/types';

const Home = () => {
  const currentUser = useSelector(getCurrentUser);

  const [allCourses, setAllCourses] = useState<CourseData[]>();

  const [getAllCourses] = useApi(() => CourseService.getAllCourses(), false, true, false);

  //async sets this function as an asynchronous function to allow operations to be performed asynchronously
  const fetchAllData = async () => {
    //Await expression ensures that this promise based operation is complete before moving on to other operations. Async/await replaces try/catch
    const allCoursesObject = await retrieveAllData<CourseData[]>(getAllCourses);
    setAllCourses(allCoursesObject ?? []);
  };

  // Fetch Data from API
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <HomeHeader allCourses={allCourses ?? []}></HomeHeader>
      <main>
        <HomeMain></HomeMain>
      </main>
    </>
  );
};

export default Home;
