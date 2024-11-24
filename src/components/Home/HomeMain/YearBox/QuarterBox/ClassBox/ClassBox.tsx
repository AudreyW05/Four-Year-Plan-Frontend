import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, TextField } from '@mui/material';

type Props = {
  year: string;
  quarter: string; // Name of the quarter
  
};

const ClassBox = (props: Props) => {
  const [classNames, setClassNames] = useState<string[]>([]); // Manage class names dynamically
  const [newClass, setNewClass] = useState<string>(''); // Input for adding a new class
  const [classToRemove, setClassToRemove] = useState<string>(''); // Input for removing a specific class

  const [units, setUnits] = useState<number>(0); // Start with 0 units

  // const addClass = () => {
  //   if (courses < 5) {
  //     setCourses(courses + 1);
  //     setUnits(units + 4); // Adjust if units vary per class
  //   }
  // };
  const addClass = () => {
    if (classNames.length < 5) {
      setClassNames([...classNames, newClass.trim()]);
      setNewClass(''); // Clear the input after adding
      setUnits(units + 4); // Change 4 units to actual class units
    }
  };

  // const removeClass = () => {
  //   if (courses > 0) {
  //     setCourses(courses - 1);
  //     setUnits(units - 4); // Adjust if units vary per class
  //   }
  // };
  const removeClass = () => {
    if (classToRemove.trim() !== '') {
      setClassNames(classNames.filter((className) => className !== classToRemove.trim()));
      setClassToRemove(''); // Clear the input after removing
      setUnits(units - 4);
    }
  };

  return (
    <Box className="bg-bgGray flex flex-col items-center">
      {/* Dynamic Grid for classes */}
      <Box className="border border-dashed border-textGray rounded-md p-3 gap-2">
        <Grid container spacing={1.5}>
          {Array.from({ length: Math.max(4, classNames.length) }).map((_, index) => (
            <Grid className='justify-items-stretch' item xs={6} key={index}>
              {index < classNames.length ? (
                <Paper className="font-Inter bg-bgGray text-textGray py-4 h-50px whitespace-nowrap" elevation={2}>
                  <Typography className='text-center fontsize-10px font-Inter bg-bgGray text-textGray' variant="body2">{classNames[index]}</Typography>
                </Paper>
              ) : (
                <Paper className="fontsize-sm font-Inter bg-bgGray text-textGray p-4 text-center  h-50px opacity-30" elevation={2}>
                  <Typography variant="body2">Empty</Typography>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Input field to add a new class */}
      <Box className="flex flex-col items-center mt-2 gap-2">
        <TextField
          label="New Class"
          variant="outlined"
          value={newClass}
          onChange={(e) => setNewClass(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={addClass} disabled={classNames.length >= 5 || newClass.trim() === ''}>
          Add Class
        </Button>
      </Box>

      {/* Input field to remove a specific class */}
      <Box className="flex flex-col items-center mt-2 gap-2">
        <TextField
          label="Class to Remove"
          variant="outlined"
          value={classToRemove}
          onChange={(e) => setClassToRemove(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={removeClass} disabled={classToRemove.trim() === ''}>
          Remove Class
        </Button>
      </Box>

      {/* Classes display */}
      <Box className="flex justify-end w-full">
        <Typography className="font-Inter text-textGray text-sm pt-2 pb-2">
          Classes {classNames.length} / Units {units}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassBox;