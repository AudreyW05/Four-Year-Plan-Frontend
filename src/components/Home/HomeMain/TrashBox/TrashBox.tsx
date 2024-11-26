import React, { useState } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props = {
  setClasses: React.Dispatch<React.SetStateAction<{ [year: string]: { [quarter: string]: string[] } }>>;
}

const TrashBox = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleOnDrop(e: React.DragEvent) {
    e.preventDefault();
    const className = e.dataTransfer.getData("className") as string;
    const classUnits = e.dataTransfer.getData("classUnits") as string;
    const year = e.dataTransfer.getData("year") as string;
    const quarter = e.dataTransfer.getData("quarter") as string;
    removeClass(className, year, quarter);
    console.log("removed class");
  }
  const removeClass = (className: string, year: string, quarter: string) => {
    props.setClasses((prevClasses) => {
      const updatedClasses = { ...prevClasses };
      updatedClasses[year][quarter] = updatedClasses[year][quarter].filter(
        (existingClass) => existingClass !== className
      );
      return updatedClasses;
    });
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow the drop
    setIsHovered(true); // Set hover state to true when dragging over
  };

  const handleDragLeave = () => {
    setIsHovered(false); // Reset hover state when leaving the droppable area
  };
  return (
    <Box
      className='fixed bottom-8 right-10 bg-bgTrash text-white p-4 rounded-lg shadow-lg w-20 h-16 flex items-center justify-center hover:bg-bgWhite hover:border-2 hover:border-bgTrash'
      onMouseEnter={() => setIsHovered(true)} // Set hover to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover to false when mouse leaves
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {isHovered ? (
        <DeleteOutlineIcon fontSize='large' className='text-bgTrash' />
      ) : (
        <DeleteIcon fontSize='large' className='text-bgWhite' />
      )}
    </Box>
  );
};

export default TrashBox;
