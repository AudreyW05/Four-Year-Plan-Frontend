import React, { useEffect, useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Box, Drawer, List, ListItemButton, ListItemText, Collapse } from '@mui/material';

type Props = {
  sectname: string;
};

const ClassCategories = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [widgets, setWidgets] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType:", widgetType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType") as string;
    console.log("widget type:", widgetType)
    setWidgets([...widgets, widgetType]);
  }
  return (
    <>
      <ListItemButton className='mx-4 my-2' onClick={() => setOpen(!open)}>
        <ListItemText>{props.sectname}</ListItemText>
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open}>
        <List>
          <p>class selections here</p>
          <p>create new prop to pass here?</p>
        </List>
      </Collapse>
    </>
  );
};

export default ClassCategories;
