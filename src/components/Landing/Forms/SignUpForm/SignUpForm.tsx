import React, { useState } from 'react';

import { Card, TextField, OutlinedInput, InputLabel, FormControl, CircularProgress, Stack, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { NavLink } from 'react-router-dom';
import { routes } from '@/constants/routes';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignIn = () => {
    console.log('sign in');
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (emailError) {
      setEmailError(false);
      if (password.trim().length != 0) {
        setPasswordError(false);
      }
    }
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (passwordError) {
      setPasswordError(false);
      if (email.trim().length != 0) {
        setEmailError(false);
      }
    }
    setPassword(event.target.value);
  };

  const onReEnterPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (passwordError) {
      setPasswordError(false);
      if (email.trim().length != 0) {
        setEmailError(false);
      }
    }
    setReEnterPassword(event.target.value);
  };

  return (
    <Card className='w-[600px] h-[450px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-2xl'>
      <Stack className='my-6 mx-12' spacing={2.5}>
        <Stack className='font-Inter' spacing={-1}>
          <Typography className='text-[52px]'>Sign Up</Typography>
          <Stack direction='row' spacing={1}>
            <Typography className='text-[16px]'>
              Already have an account?{' '}
              <NavLink to={routes.authentication.login} target='_blank' className='text-uclaBlue hover:underline underline-offset-4'>
                Sign In
              </NavLink>
            </Typography>
          </Stack>
        </Stack>
        <Stack className='mx-8 pt-1' spacing={2}>
          <TextField
            label='Email < @g.ucla.edu >'
            value={email}
            error={emailError}
            onChange={onEmailChange}
            onKeyPress={e => e.key === 'Enter' && handleSignIn()}
          />
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Password &lt; 6+ characters, 1+ special character &gt;
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={'password'}
              value={password}
              onChange={onPasswordChange}
              label='Password <6+ characters, 1 special character>'
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Re-enter Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={'password'}
              value={reEnterPassword}
              onChange={onReEnterPasswordChange}
              label='Re-enter Password'
            />
          </FormControl>
        </Stack>
        <div className='float-right'>
          <LoadingButton
            loading={isLoading}
            onClick={handleSignIn}
            className='bg-uclaBlue normal-case w-48 h-11 text-lg rounded-lg font-Inter float-right'
            variant='contained'
            loadingIndicator={<CircularProgress size={16} className='text-bgWhite' />}
          >
            Create Account
          </LoadingButton>
        </div>
      </Stack>
    </Card>
  );
};

export default SignUpForm;
