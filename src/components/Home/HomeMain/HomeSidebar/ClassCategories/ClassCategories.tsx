import React, { useEffect, useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Typography, Box, Drawer, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { Widgets } from '@mui/icons-material';

type Props = {
  key: string
  sectname: string;
  class: [string, number][];
  onRemoveClass: (className: string, sectName: string) => void
};

const ClassCategories = (props: Props) => {
const [open, setOpen] = useState(false);
const [classes, setClasses] = useState(props.class);
  

  function handleOnDrag(e: React.DragEvent, className: string, classUnits: number, sectname: string) {
    e.dataTransfer.setData("className", className)
    e.dataTransfer.setData("classUnits", classUnits.toString())
    e.dataTransfer.setData("fromSidebar", "1")
    // props.onRemoveClass(className, sectname)//removes from main array
    // const updatedClasses = classes.filter(([name]) => name !== className);
    // setClasses(updatedClasses);
  }

  // function handleOnDrop(e:React.DragEvent, className: string, sectname: string){
   
    
  // }
  
  
  return (
    <>
      <ListItemButton className='mx-4 my-2' onClick={() => setOpen(!open)}>
        <ListItemText>{props.sectname}</ListItemText>
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>

      <Collapse in={open}>
        <Box className="flex flex-col items-center p-2"
        >
          {props.class.map(([courseName, units], index) => (
            <Box
              key={index}
              draggable
              onDragStart={(e) => handleOnDrag(e, courseName, units, props.sectname)
              }
              // onDrop={(e) =>handleOnDrop(e, courseName, props.sectname)}
              className="bg-bgGray p-4 rounded-lg cursor-pointer my-2 text-center min-h-[50px] outline flex justify-center items-center w-[70%]"
            >
              <Typography variant="body2">
                {courseName} - {units} units
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default ClassCategories;
