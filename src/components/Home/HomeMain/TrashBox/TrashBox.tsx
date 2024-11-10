import React, { useState } from 'react';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TrashBox = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      className='fixed bottom-8 right-10 bg-bgTrash text-white p-4 rounded-lg shadow-lg w-20 h-16 flex items-center justify-center hover:bg-bgWhite hover:border-2 hover:border-bgTrash'
      onMouseEnter={() => setIsHovered(true)} // Set hover to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hover to false when mouse leaves
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
