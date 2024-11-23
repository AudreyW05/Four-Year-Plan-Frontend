import React from 'react';
import { useApi } from '@/api/ApiHandler';
import AuthService from '@/api/auth/AuthService';
import UserService from '@/api/user/UserService';

import { Button, Stack, Typography } from '@mui/material';
import { ApiData } from '@/api/ApiService';
import { isSuccess } from '@/api/ApiHandler';

const Test = () => {
  const [login] = useApi(() => AuthService.login('audreywong@gmail.com', 'abc12345!'), true, true);

  const [getSelf] = useApi(() => UserService.getSelf(), true, true);
  const [getAllUsers] = useApi(() => UserService.getAllUsers(), true, true);
  const [getUserById] = useApi(() => UserService.getUserById(1), true, true);

  const handleButtonClick = async (func: () => Promise<ApiData & isSuccess>) => {
    const res = await func();
    if (res.isSuccess) {
      console.log(res.data);
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
          </Stack>
        </Stack>
        <br />
      </div>
    </>
  );
};

export default Test;
