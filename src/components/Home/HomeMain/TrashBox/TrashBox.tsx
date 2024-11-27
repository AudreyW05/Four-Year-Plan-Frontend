import React, { useState } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CreateCourseData, MyCourseData } from '@/modules/course/types';

type Props = {
  handleAddCourse: (data: CreateCourseData) => void;
  handleDeleteCourse: (code: string) => void;
  myCourses: MyCourseData[];
};

const TrashBox = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  function handleOnDrop(e: React.DragEvent) {
    e.preventDefault();
    if (!props.myCourses.some(course => course.code === (e.dataTransfer.getData('className') as string))) {
      const className = e.dataTransfer.getData('className') as string;
      props.handleDeleteCourse(className);
    }
    console.log('removed class');
    setIsDraggingOver(false);
  }
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allow the drop
    if (!isDraggingOver) {
      setIsDraggingOver(true); // Ensure this block runs only once
      console.log('Dragging over the trash box.');
    }
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
    // Reset hover state when leaving the droppable area
  };

  const isActive = isHovered || isDraggingOver;
  const containerClass = isActive ? 'bg-bgWhite border-2 border-bgTrash' : 'bg-bgTrash';
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
        <DeleteOutlineIcon fontSize='large' className='text-bgTrash' />
      ) : (
        <DeleteIcon fontSize='large' className='text-bgWhite' />
      )}
    </Box>
  );
};

export default TrashBox;
