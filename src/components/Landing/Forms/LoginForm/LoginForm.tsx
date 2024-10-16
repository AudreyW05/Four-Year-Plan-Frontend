import React, { useState } from 'react';

import {
  Card,
  TextField,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
  Typography,
  Grid2,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

import { NavLink } from 'react-router-dom';
import { routes } from '@/constants/routes';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignIn = () => {
    console.log('sign in');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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

  return (
    <Card className='w-[600px] h-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-2xl'>
      <Stack className='my-6 mx-12' spacing={1.5}>
        <Stack className='font-Inter' spacing={-1}>
          <Typography className='text-[52px]'>Welcome Back</Typography>
          <Stack direction='row' spacing={1}>
            <Typography className='text-[16px]'>
              Need to make an account?{' '}
              <NavLink to={routes.authentication.signup} target='_blank' className='text-uclaBlue hover:underline underline-offset-4'>
                Sign Up
              </NavLink>
            </Typography>
          </Stack>
        </Stack>
        <Stack className='mx-8 pt-3' spacing={2}>
          <TextField
            label='Email'
            value={email}
            error={emailError}
            onChange={onEmailChange}
            onKeyPress={e => e.key === 'Enter' && handleSignIn()}
          />
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onPasswordChange}
              onKeyPress={e => e.key === 'Enter' && handleSignIn()}
              endAdornment={
                <InputAdornment position='end' className='mx-2'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Grid2 container className='w-full justify-center'>
            <NavLink to={routes.authentication.forgotPassword} target='_blank' className='text-uclaBlue hover:underline underline-offset-4'>
              Forgot Password?
            </NavLink>
          </Grid2>
        </Stack>
        <div className='float-right'>
          <LoadingButton
            loading={isLoading}
            onClick={handleSignIn}
            className='bg-uclaBlue normal-case w-32 h-11 text-lg rounded-lg font-Inter float-right'
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

export default LoginForm;
