// YearBox.tsx
import React, { useState } from 'react';
import QuarterBox from '@components/Home/HomeMain/YearBox/QuarterBox/QuarterBox';
import { Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

type Props = {
  year: string;
}

const YearBox = (props: Props) => {
  // Initial quarters without "Summer"
  const [quarters, setQuarters] = useState<string[]>(["Fall Quarter", "Winter Quarter", "Spring Quarter"]);
  const [showSummer, setShowSummer] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);

  // Toggle function to add or remove "Summer"
  const toggleSummer = () => {
    setShowSummer(!showSummer);
    if (!showSummer) {
      setQuarters([...quarters, "Summer Quarter"]);
    } else {
      setQuarters(quarters.filter((quarter) => quarter !== "Summer Quarter"));
    }
  };

  return (
    <Box className='font-Inter bg-bgGray text-textGray justify-center w-fit p-2 rounded-lg shadow-sm mx-6 my-3'>
      {/* Year # on top */}
      <Typography className='flex-shrink-0 mb-1 text-left pl-3 pt-3' variant='h5' align='center'>
        Year {props.year}
      </Typography>
      
      {/* QuarterBoxes will flex here */}
      <Box className='bg-bgGray text-textGray flex flex-row items-center flex-grow gap-1 justify-between w-full'>
        {quarters.map((quarter, index) => (
          <QuarterBox key={index} quarter={quarter} />
        ))}
        <Box
          onClick={toggleSummer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered
          ? showSummer
            ? <RemoveCircleOutlineIcon className='text-textGray' />
            : <AddCircleOutlineIcon className='text-textGray' />
          : showSummer
          ? <RemoveCircleIcon className='text-textGray' />
          : <AddCircleIcon className='text-textGray' />
        }
        </Box>
      </Box>
    </Box>
  );
};

export default YearBox;
