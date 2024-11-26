import React, { useState } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type Props = {
  setClasses: React.Dispatch<React.SetStateAction<{ [year: string]: { [quarter: string]: string[] } }>>;
  setUnits: React.Dispatch<React.SetStateAction< { [year: string]: { [quarter: string]: number[] } } >>;
}

const TrashBox = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);


  function handleOnDrop(e: React.DragEvent) {
    e.preventDefault();
    const className = e.dataTransfer.getData("className") as string;
    const classUnits = e.dataTransfer.getData("classUnits") as string;
    const year = e.dataTransfer.getData("year") as string;
    const quarter = e.dataTransfer.getData("quarter") as string;
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
    console.log("removed class");
    setIsDraggingOver(false);
  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow the drop
    if (!isDraggingOver) {
      setIsDraggingOver(true); // Ensure this block runs only once
      console.log("Dragging over the trash box.");
    }
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
 // Reset hover state when leaving the droppable area
  };

  const isActive = isHovered || isDraggingOver;
  const containerClass = isActive
    ? 'bg-bgWhite border-2 border-bgTrash'
    : 'bg-bgTrash';
  return (
    <Box
      className={`fixed bottom-8 right-10 ${containerClass} text-white p-4 rounded-lg shadow-lg w-20 h-16 flex items-center justify-center`}
      onMouseEnter={() => setIsHovered(true)} // Set hover to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover to false when mouse leaves
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {isHovered || isDraggingOver ? (
        <DeleteOutlineIcon fontSize="large" className="text-bgTrash" />
      ) : (
        <DeleteIcon fontSize="large" className="text-bgWhite" />
      )}
    </Box>
  );
};

export default TrashBox;
