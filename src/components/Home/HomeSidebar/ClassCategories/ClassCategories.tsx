import React, { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { 
    Box, 
    Drawer, 
    List, 
    ListItemButton,
    ListItemText, 
    Collapse 
} from '@mui/material';

type Props = {
    sectname: string;
}

const ClassCategories = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItemButton
            onClick={() => setOpen(!open)}
            >
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
}

export default ClassCategories;