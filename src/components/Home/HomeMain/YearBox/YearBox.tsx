// YearBox.tsx
import React, { useState } from 'react';
import QuarterBox from '@components/Home/HomeMain/YearBox/QuarterBox/QuarterBox';
import { Box, Button, Typography } from "@mui/material";

type Props = {
  year: string;
}

const YearBox = (props: Props) => {
  // Initial quarters without "Summer"
  const [quarters, setQuarters] = useState<string[]>(["Fall Quarter", "Winter Quarter", "Spring Quarter"]);
  const [showSummer, setShowSummer] = useState<boolean>(false);

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
    <Box className="font-Inter bg-bgGray text-textGray flex flex-col items-start justify-center w-auto p-2 rounded-lg shadow-sm mx-6 my-3">
      {/* Year # on top */}
      <Typography className="flex-shrink-0 mb-1 text-left pl-3 pt-3" variant="h5" align="center">
        Year {props.year}
      </Typography>
      
      {/* QuarterBoxes will flex here */}
      <Box 
        className="bg-bgGray text-textGray flex flex-row items-center flex-grow gap-1">
        {quarters.map((quarter, index) => (
          <QuarterBox key={index} quarter={quarter} />
        ))}
        <Button
          className="rotate-90"
          onClick={toggleSummer}
          color="primary"
          variant="contained"
          size="small"
          
        >
          <span className="-rotate-90">
            {showSummer ? "-" : "+"}
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default YearBox;
