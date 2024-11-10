// YearBox.tsx
import React, { useState } from 'react';
import QuarterBox from '@components/Home/HomeMain/YearBox/QuarterBox/QuarterBox';
import { Box, Button, Typography } from "@mui/material";

interface YearBoxProps {
  year: string;
}

const YearBox: React.FC<YearBoxProps> = ({ year }) => {
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
    <Box className="font-Inter bg-bgGray text-textGray"
      sx={{
        display: "flex",
        flexDirection: "column", // Stack Year and Quarters vertically
        alignItems: "flex-start", 
        justifyContent: "center", // Center items vertically
        width: "auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 1, // Optional: Add a light shadow for better visibility
        marginX: 4,
        marginY: 2
      }}
    >
      {/* Year 2024 on top */}
      <Typography variant="h5" align="center" sx={{ flexShrink: 0, marginBottom: 1, textAlign: "left" }}>
        Year {year}
      </Typography>
      
      {/* QuarterBoxes will flex here */}
      <Box 
        className="bg-bgGray text-textGray"
        sx={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center", 
          flexGrow: 1, 
          gap: 1 }}>
        {quarters.map((quarter, index) => (
          <QuarterBox key={index} quarter={quarter} />
        ))}
        <Button
          onClick={toggleSummer}
          color="primary"
          variant="contained"
          size="small"
          sx={{
            transform: 'rotate(90deg)'
          }}
        >
          <span
            style={{
              transform: 'rotate(-90deg)', // Rotate the text back to its original orientation
          }}
          >
            {showSummer ? "-" : "+"}
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default YearBox;
