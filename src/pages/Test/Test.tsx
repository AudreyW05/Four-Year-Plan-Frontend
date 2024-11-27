import React from 'react';
import { useApi } from '@/api/ApiHandler';
import AuthService from '@/api/auth/AuthService';
import UserService from '@/api/user/UserService';
import DegreeService from '@/api/degree/DegreeService';
import CourseService from '@/api/course/CourseService';

import { Button, Stack, Typography } from '@mui/material';
import { ApiData } from '@/api/ApiService';
import { isSuccess } from '@/api/ApiHandler';

import { Categories, Category } from '@/modules/course/types';

const Test = () => {
  const [login] = useApi(() => AuthService.login('audreywong1@gmail.com', 'abc12345!!'), true, true);
  const [register] = useApi(() => AuthService.register('audreywong1@gmail.com', 'abc12345!!'), true, true);

  const [getSelf] = useApi(() => UserService.getSelf(), true, true);
  const [getAllUsers] = useApi(() => UserService.getAllUsers(), true, true);
  const [getUserById] = useApi(() => UserService.getUserById(2), true, true);
  const [addCourseToUser] = useApi(() => UserService.addCourseToUser(4, 'CS 180', 1, 1), true, true);

  const [createDegree] = useApi(() => DegreeService.createDegree('Computer Science'), true, true);
  const [getAllDegrees] = useApi(() => DegreeService.getAllDegrees(), true, true);
  const [getDegreeByName] = useApi(() => DegreeService.getDegreeByName('Computer Science'), true, true);

  const [createCourse] = useApi(() => CourseService.createCourse('CS 180', 4, Category.UPPER_DIV), true, true);
  const [getAllCourses] = useApi(() => CourseService.getAllCourses(), true, true);
  const [getCourseByCode] = useApi(() => CourseService.getCourseByCode('CS 180'), true, true);

  const handleButtonClick = async (func: () => Promise<ApiData & isSuccess>) => {
    const res = await func();
    if (res.isSuccess) {
      console.log(res);
    }
  };

  return (
    <>
      <div className='pt-6 pl-6'>
        <Typography className='pb-6' variant='h3'>
          Add your own test components below!
        </Typography>
        <Typography variant='h4'>APIs</Typography>
        <Stack spacing={2} direction='column'>
          <Typography variant='h5'>Auth</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={() => handleButtonClick(login)}>
              Sign In
            </Button>
            <Button variant='contained' onClick={() => AuthService.logout()}>
              Sign Out
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(register)}>
              Register
            </Button>
          </Stack>
          <Typography variant='h5'>User</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={() => handleButtonClick(getSelf)}>
              Get Self
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getAllUsers)}>
              Get All
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getUserById)}>
              Get User By Id
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(addCourseToUser)}>
              Add Course To User
            </Button>
          </Stack>
          <Typography variant='h5'>Degree</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={() => handleButtonClick(createDegree)}>
              Create Degree
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getAllDegrees)}>
              Get All Degrees
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getDegreeByName)}>
              Get Degree By Name
            </Button>
          </Stack>
          <Typography variant='h5'>Course</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' onClick={() => handleButtonClick(createCourse)}>
              Create Course
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getAllCourses)}>
              Get All Courses
            </Button>
            <Button variant='contained' onClick={() => handleButtonClick(getCourseByCode)}>
              Get Course By Code
            </Button>
          </Stack>
        </Stack>
        <br />
      </div>
    </>
  );
};

export default Test;
