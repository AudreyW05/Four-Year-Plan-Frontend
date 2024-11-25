import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, Button, TextField } from '@mui/material';

type Props = {
  year: string;
  quarter: string; // Name of the quarter
  
};

const ClassBox = (props: Props) => {
  const [classNames, setClassNames] = useState<string[]>([]); // Manage class names dynamically
  const [units, setUnits] = useState<number>(0); // Start with 0 units

  const addClass = (className: string, classUnits: string) => {
    if (classNames.length < 5) {
      setClassNames([...classNames, className]);
      setUnits(units + Number(classUnits)); // Change 4 units to actual class units
    }
  };
  

  function handleOnDrop(e: React.DragEvent) {
    const className = e.dataTransfer.getData("className") as string;
    const classUnits = e.dataTransfer.getData("classUnits") as string;
    addClass(className, classUnits);
  }

  function handleDragOver(e: React.DragEvent){
    e.preventDefault();
  }

  const removeClass = (classToRemove: string, classUnits: string) => {

    if (classToRemove.trim() !== '') {
      setClassNames(classNames.filter((className) => className !== classToRemove.trim()));
      setUnits(units - Number(classUnits));
    }
  };

  function handleOnDrag(e: React.DragEvent, className: string, classUnits: number) {
    e.dataTransfer.setData("className", className)
    e.dataTransfer.setData("classUnits", classUnits.toString())
  }

  return (
    <Box className="bg-bgGray flex flex-col items-center">
      {/* Dynamic Grid for classes */}
      <Box className="border border-dashed border-textGray rounded-md p-3 gap-2" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <Grid container spacing={1.5}>
          {Array.from({ length: Math.max(4, classNames.length) }).map((_, index) => (
            <Grid className='justify-items-stretch' item xs={6} key={index}>
              {index < classNames.length ? (
                <Paper className="font-Inter bg-bgGray text-textGray py-4 h-50px w-200px min-w-[100px] whitespace-nowrap" elevation={2} draggable
                onDragStart={(e) => handleOnDrag(e, classNames[index], 4)}
                >
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