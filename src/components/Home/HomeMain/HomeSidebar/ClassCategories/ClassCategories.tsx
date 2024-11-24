import React, { useEffect, useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Typography, Box, Drawer, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { Widgets } from '@mui/icons-material';

type Props = {
  sectname: string;
};

const ClassCategories = (props: Props) => {
  const [open, setOpen] = useState(false);
  

  function handleOnDrag(e: React.DragEvent, className: string, classUnits: number) {
    e.dataTransfer.setData("className", className)
    e.dataTransfer.setData("classUnits", classUnits.toString())
  }
  
  
  return (
    <>
      <ListItemButton className='mx-4 my-2' onClick={() => setOpen(!open)}>
        <ListItemText>{props.sectname}</ListItemText>
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open}>
        {/* <Box
        className='bg-bgGray'
        display='flex'
        flexDirection='column'
        alignItems='center'
        border='1px dashed #404040'
        borderRadius={2}
        width='100'
        padding={2}
        gap={2}
        onDrop={handleOnDrop}
        onDragOver={(e) => e.preventDefault()} // Allow drop by preventing the default behavior
      > */}
     <Box
        draggable
        gap={10}
        width="90%"
        maxHeight="100px"
        onDragStart={(e) => handleOnDrag(e, "cs31", 4)}
        className="bg-uclaBlue text-bgWhite p-4 rounded-lg cursor-pointer my-2 align-content: center text-center min-h-[50px]"
      >
        <Typography variant='body2'>CS31</Typography>
      </Box>
      <Box
        draggable
        gap={10}
        maxHeight="100px"
        width="90%"
        onDragStart={(e) => handleOnDrag(e, "cs32", 3)}
        className="bg-uclaBlue text-bgWhite p-4 rounded-lg cursor-pointer text-center min-h-[50px]"
      >
        <Typography variant='body2'>CS32</Typography>
      </Box>

      {/* </Box> */}
      </Collapse>
    </>
  );
};

export default ClassCategories;
