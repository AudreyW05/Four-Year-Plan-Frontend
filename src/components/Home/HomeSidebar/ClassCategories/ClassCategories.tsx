import React, { useEffect, useState } from "react";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { 
    Box, 
    Drawer, 
    Button,
    Divider,
    List, 
    ListItem, 
    ListItemButton,
    ListItemIcon,
    ListItemText, 
    Collapse 
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface ClassCategoriesProps {
    sectname: string;
}

const ClassCategories: React.FC<ClassCategoriesProps> = ({sectname}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItemButton
            onClick={() => setOpen(!open)}
            >
                <ListItemText>{sectname}</ListItemText>
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