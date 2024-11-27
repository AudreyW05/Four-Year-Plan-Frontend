import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '@/api/ApiHandler';
import { retrieveAllData } from '@/utils/api';

import { getCurrentUser } from '@/modules/user/userSlice';
import { toggleShowNotification } from '@/modules/ui/uiSlice';
import { severity } from '@/constants/constants';

import HomeHeader from '@/components/Home/HomeHeader/HomeHeader';
import HomeMain from '@/components/Home/HomeMain/HomeMain';

import CourseService from '@/api/course/CourseService';
import UserService from '@/api/user/UserService';

import { CourseData, CreateCourseData, MyCourseData } from '@/modules/course/types';

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const [allCourses, setAllCourses] = useState<CourseData[]>([]);
  const [myCourses, setMyCourses] = useState<MyCourseData[]>(currentUser?.courses ?? []);
  const [userId, setUserId] = useState<number>(currentUser?.id ?? 0);

  const [getSelf] = useApi(() => UserService.getSelf(), false, false, false);
  const [getAllCourses] = useApi(() => CourseService.getAllCourses(), false, true, false);
  const [addCourseToUser] = useApi(
    (data: CreateCourseData) => UserService.addCourseToUser(userId, data.code, data.year, data.quarter),
    false,
    true,
    false,
  );
  const [deleteCourseFromUser] = useApi(code => UserService.deleteCourseFromUser(userId, code), false, true, false);

  const fetchAllData = async () => {
    const allCoursesObject = await retrieveAllData<CourseData[]>(getAllCourses);
    setAllCourses(allCoursesObject ?? []);
    try {
      const res = await getSelf();
      if (res.isSuccess) {
        setMyCourses(res.data?.courses);
      }
    } catch (err) {
      console.error('Error fetching user:', err);
    }
    setUserId(currentUser?.id ?? 0);
  };

  const handleAddCourse = async (data: CreateCourseData) => {
    dispatch(toggleShowNotification({ message: 'Loading...', severity: severity.LOADING }));
    await addCourseToUser(data);
    await fetchAllData();
    dispatch(toggleShowNotification({ message: 'Done', severity: severity.SUCCESS }));
  };

  const handleDeleteCourse = async (code: string) => {
    dispatch(toggleShowNotification({ message: 'Loading...', severity: severity.LOADING }));
    await deleteCourseFromUser(code);
    await fetchAllData();
    dispatch(toggleShowNotification({ message: 'Done', severity: severity.SUCCESS }));
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <HomeHeader
        allCourses={allCourses}
        myCourses={myCourses}
        userId={userId}
        handleAddCourse={handleAddCourse}
        handleDeleteCourse={handleDeleteCourse}
        email={currentUser?.email ?? ''}
      />
      <main>
        <HomeMain 
          allCourses={allCourses}
          myCourses={myCourses}
          userId={userId}
          handleAddCourse={handleAddCourse}
          handleDeleteCourse={handleDeleteCourse}
        />
      </main>
    </>
  );
};

export default Home;
