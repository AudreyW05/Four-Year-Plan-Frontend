import React from 'react';
import LandingImage from '@/assets/images/Landing-Image.jpg';

type Props = {
  Form: () => JSX.Element;
};

const LandingWrapper = ({ Form }: Props) => {
  return (
    <>
      <Form />
      <img className='touch-none w-screen h-screen' src={LandingImage} />
    </>
  );
};

export default LandingWrapper;
