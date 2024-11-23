import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { routes } from '@/constants/routes';
import { LoadingButton } from '@mui/lab';

import { Card, TextField, OutlinedInput, Stack, Typography, CircularProgress, FormControl, InputLabel } from '@mui/material';

const NewPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailcode, setEmailCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');
  const [codeError, setCodeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reEnterPasswordError, setReEnterPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('sign in');
    navigate(routes.authentication.login);
  };

  const onCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (codeError) {
      setCodeError(false);
      if (password.trim().length != 0) {
        setPasswordError(false);
      }
    }
    setEmailCode(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (passwordError) {
      setPasswordError(false);
    }
    setPassword(event.target.value);
  };

  const onReEnterPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (password === reEnterPassword) {
      setReEnterPasswordError(false);
    } else {
      setReEnterPasswordError(true);
    }
    setReEnterPassword(event.target.value);
  };

  return (
    <Card className='w-[600px] h-[450px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-2xl'>
      <Stack className='my-6 mx-12' spacing={2.5}>
        <Stack className='font-Inter' spacing={-1}>
          <Typography className='text-[52px]'>Reset Password</Typography>
          <Stack className='mx-8.3.5' direction='row' spacing={1}>
            <Typography className='text-[16px]'>
              Remember your Password Silly?{' '}
              <NavLink to={routes.authentication.login} className='text-uclaBlue hover:underline underline-offset-4'>
                Log In
              </NavLink>
            </Typography>
          </Stack>
        </Stack>

        <Stack className='mx-8 pt-1' spacing={2}>
          <TextField
            label='Email Code'
            value={emailcode}
            error={codeError}
            onChange={onCodeChange}
            onKeyDown={e => e.key === 'Enter' && handleSignIn()}
          />

          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              New Password &lt; 6+ characters, 1+ special character &gt;
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={'password'}
              value={password}
              onChange={onPasswordChange}
              label='New Password <6+ characters, 1 special character>'
            />
          </FormControl>

          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Re-enter New Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={'password'}
              value={reEnterPassword}
              onChange={onReEnterPasswordChange}
              label='Re-enter New Password'
            />
          </FormControl>
        </Stack>
        <div className='absolute bottom-5 right-10 h-16 w-16'>
          <LoadingButton
            loading={isLoading}
            onClick={handleSignIn}
            className='bg-uclaBlue normal-case w-32 h-11 font-medium rounded-lg font-Inter float-right text-lg'
            variant='contained'
            loadingIndicator={<CircularProgress size={16} className='text-bgWhite' />}
          >
            Sign In
          </LoadingButton>
        </div>
      </Stack>
    </Card>
  );
};
export default NewPasswordForm;
