import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, Button, TextField } from '@mui/material';

type Props = {
  year: string;
  quarter: string; // Name of the quarter
  classes: { [year: string]: { [quarter: string]: string[] } };
  units: { [year: string]: { [quarter: string]: number[] } };
  setClasses: React.Dispatch<React.SetStateAction<{ [year: string]: { [quarter: string]: string[] } }>>;
  setUnits: React.Dispatch<React.SetStateAction< { [year: string]: { [quarter: string]: number[] } } >>;
};

const ClassBox = (props: Props) => {
  const [totalUnits, setTotalUnits] = useState<number>(0);

  useEffect(() => {
    const newTotal = props.units[props.year][props.quarter].reduce((sum, unit) => sum + unit, 0);
    setTotalUnits(newTotal);
  }), [props.classes, props.units]

  const addClass = (className: string, classUnits: string) => {
    if (props.classes[props.year][props.quarter].length < 5 && !props.classes[props.year][props.quarter].includes(className)) {
      props.setClasses((prevClasses) => {
        const updatedClasses = { ...prevClasses };
        // Add the new className to the relevant year and quarter
        updatedClasses[props.year][props.quarter].push(className);
        props.setUnits((prevUnits) => {
          console.log(prevUnits);
          const updatedUnits = {...prevUnits};
          // Add new units
          updatedUnits[props.year][props.quarter].push(Number(classUnits));
          return updatedUnits;
        });
        return updatedClasses; // Return the updated state
      });
    }
  };

  const removeClass = (year: string, quarter: string, className: string) => {
    props.setClasses((prevClasses) => {
      const updatedClasses = { ...prevClasses };
      const classIndex = updatedClasses[year][quarter].findIndex(
        (existingClass) => existingClass === className
      );
      updatedClasses[year][quarter] = updatedClasses[year][quarter].filter(
        (_, index) => index !== classIndex
      );
      props.setUnits((prevUnits) => {
        const updatedUnits = {...prevUnits};
        updatedUnits[year][quarter] = updatedUnits[year][quarter].filter(
          (_, index) => index !== classIndex
        );
        return updatedUnits;
      });
      return updatedClasses;
    });
    
  }
  

  function handleOnDrop(e: React.DragEvent) {
    console.log("on drop")
    const year = e.dataTransfer.getData("year") as string;
    const quarter = e.dataTransfer.getData("quarter") as string;
    const className = e.dataTransfer.getData("className") as string;
    const classUnits = e.dataTransfer.getData("classUnits") as string;
    const fromSidebar = e.dataTransfer.getData("fromSidebar") as string;
    if (year !== props.year || quarter !== props.quarter) { // if different year/quarter
      addClass(className, classUnits);
    }
    if (fromSidebar === "0") { // from class
      if (year !== props.year || quarter !== props.quarter) { // if different year/quarter
        removeClass(year, quarter, className);
      }
    }

  }

  function handleDragOver(e: React.DragEvent){
    console.log("on drag over")
    e.preventDefault();

  }


  function handleOnDrag(e: React.DragEvent, className: string, classUnits: number) {
    console.log("on drag");
    e.dataTransfer.setData("className", className)
    e.dataTransfer.setData("classUnits", classUnits.toString())
    e.dataTransfer.setData("year", props.year)
    e.dataTransfer.setData("quarter", props.quarter)
    e.dataTransfer.setData("fromSidebar", "0")
  }

  return (
    <Box className="bg-bgGray flex flex-col items-center">
      {/* Dynamic Grid for classes */}
      <Box className="border border-dashed border-textGray rounded-md p-3 gap-2" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <Grid container rowSpacing={1} columnSpacing={1} spacing={1.5}>
          {Array.from({ length: Math.max(4, props.classes[props.year][props.quarter].length) }).map((_, index) => (
            <Grid className='justify-items-stretch' item xs={6} md={6} sm={6} key={index}>
              {index < props.classes[props.year][props.quarter].length ? (
                <Paper className="font-Inter bg-bgGray text-textGray py-4 h-50px w-100px min-w-[90px] whitespace-nowrap" elevation={2} draggable
                onDragStart={(e) => handleOnDrag(e, props.classes[props.year][props.quarter][index], props.units[props.year][props.quarter][index])}
                >
                  <Typography className='text-center fontsize-10px font-Inter bg-bgGray text-textGray' variant="body2">{props.classes[props.year][props.quarter][index]}</Typography>
                </Paper>
              ) : (
                <Paper className="font-Inter bg-bgGray text-textGray py-4 h-50px w-100px min-w-[90px] whitespace-nowrap opacity-30" elevation={2}>
                  <Typography className='text-center fontsize-10px font-Inter bg-bgGray text-textGray' variant='body2'>Empty</Typography>
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Classes display */}
      <Box className="flex justify-end w-full">
        <Typography className="font-Inter text-textGray text-sm pt-2 pb-2">
          Classes {props.classes[props.year][props.quarter].length} / Units {totalUnits}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClassBox;