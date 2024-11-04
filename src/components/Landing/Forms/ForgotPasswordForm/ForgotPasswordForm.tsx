import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, TextField, Stack, Typography, CircularProgress } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { routes } from '@/constants/routes';
import { LoadingButton } from '@mui/lab';

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = () => {
    console.log('code sent');
    navigate(routes.authentication.newPassword);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (emailError) {
      setEmailError(false);
    }
    setEmail(event.target.value); //updates input field text
  };

  return (
    <Card className='w-[600px] h-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl drop-shadow-2xl'>
      <Stack className='my-6 mx-12' spacing={1}>
        <Stack className='font-Inter' spacing={-1}>
          <Typography className='text-[52px]'>Reset Password</Typography>
          <Stack className='mx-8.3.5' direction='row' spacing={1}>
            <Typography className='text-[16px]'>
              Remember your Password Silly?{' '}
              <NavLink to={routes.authentication.login} className='text-uclaBlue hover:underline underline-offset-4'>
                Sign In
              </NavLink>
            </Typography>
          </Stack>
        </Stack>

        <Stack className='my-12 mx-8' spacing={1.5}>
          <TextField
            label='Email'
            value={email}
            error={emailError}
            onChange={onEmailChange}
            onKeyPress={e => e.key === 'Enter' && handleSendCode}
          />
        </Stack>

        <div className='absolute bottom-20 right-10 h-16 w-16'>
          <LoadingButton
            loading={isLoading}
            onClick={handleSendCode}
            className='bg-uclaBlue normal-case w-40 h-11 text-lg rounded-lg font-Inter float-right '
            variant='contained'
            loadingIndicator={<CircularProgress size={16} className='text-bgWhite' />}
          >
            Send Code
          </LoadingButton>
        </div>
      </Stack>
    </Card>
  );
};

export default ForgotPasswordForm;
