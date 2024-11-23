import React, { useState } from 'react';

import {
  Card,
  TextField,
  OutlinedInput,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from '@/constants/routes';
import { severity } from '@/constants/constants';
import { toggleShowNotification } from '@/modules/ui/uiSlice';

import AuthService from '@/api/auth/AuthService';
import { useApi } from '@/api/ApiHandler';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reEnterPasswordError, setReEnterPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [signUp] = useApi(() => AuthService.register(email, password), true, true, false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (password === reEnterPassword) {
      setReEnterPasswordError(false);
    } else {
      setReEnterPasswordError(true);
    }
    setPassword(event.target.value);
  };

  const onReEnterPasswordChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (password === reEnterPassword) {
      setReEnterPasswordError(false);
    } else {
      setReEnterPasswordError(true);
    }
    console.log(reEnterPasswordError);
    setReEnterPassword(event.target.value);
  };

  const isFormValid = () => {
    const isValidEmail = email.length !== 0;
    const isValidPassword = password.length !== 0;

    setEmailError(isValidEmail);
    setPasswordError(isValidPassword);

    if (!isValidEmail || !isValidPassword) {
      dispatch(toggleShowNotification({ message: 'Field cannot be empty', severity: severity.ERROR }));
      throw new Error('Form Invalid');
    }
    if (!reEnterPasswordError) {
      dispatch(toggleShowNotification({ message: 'Password Confirmation Does Not Match Password', severity: severity.ERROR }));
      throw new Error('Form Invalid');
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      isFormValid();
      const res = await signUp();
      if (res.isSuccess) {
        console.log(res.data);
        navigate(routes.home);
      }
      setIsLoading(false);
      setEmailError(true);
      setPasswordError(true);
      setReEnterPasswordError(true);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Card className='w-[600px] h-[450px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-2xl'>
      <Stack className='my-6 mx-12' spacing={2.5}>
        <Stack className='font-Inter' spacing={-1}>
          <Typography className='text-[52px]'>Create Account</Typography>
          <Stack direction='row' spacing={1}>
            <Typography className='text-[16px]'>
              Already have an account?{' '}
              <NavLink to={routes.authentication.login} className='text-uclaBlue hover:underline underline-offset-4'>
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
            onKeyDown={e => e.key === 'Enter' && handleSignUp()}
          />
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Password &lt; 6+ characters, 1+ special character &gt;
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={onPasswordChange}
              label='Password <6+ characters, 1 special character>'
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
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password' error={passwordError}>
              Re-enter Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              error={passwordError}
              type={showPassword ? 'text' : 'password'}
              value={reEnterPassword}
              onChange={onReEnterPasswordChange}
              label='Re-enter Password'
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
            />
          </FormControl>
        </Stack>
        <div className='float-right'>
          <LoadingButton
            loading={isLoading}
            onClick={handleSignUp}
            className='bg-uclaBlue normal-case w-32 h-11 text-lg rounded-lg font-Inter float-right'
            variant='contained'
            loadingIndicator={<CircularProgress size={16} className='text-bgWhite' />}
          >
            Sign Up
          </LoadingButton>
        </div>
      </Stack>
    </Card>
  );
};

export default SignUpForm;
