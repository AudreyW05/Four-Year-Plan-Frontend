import React from 'react';
import LandingWrapper from '@/components/Landing/LandingWrapper/LandingWrapper';
import LoginForm from '@/components/Landing/Forms/LoginForm/LoginForm';

const Login = () => {
  return <LandingWrapper Form={LoginForm} />; //passes login form as form for landingwrapper
};

export default Login;
