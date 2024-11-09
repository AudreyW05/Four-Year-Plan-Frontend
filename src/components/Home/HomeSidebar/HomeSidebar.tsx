import React, { useState } from 'react';
import ClassCategories from './ClassCategories/ClassCategories';
import { 
    Box, 
    Drawer,
    CssBaseline,
    IconButton,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HomeSidebar = () => {
    const [open, setOpen] = useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                    {
                        mr: 2,
                        ml: 2,
                        mt: 1,
                    },
                    open && { display: 'none' },
                    ]}
                >
                <MenuIcon />
            </IconButton>
            <Drawer variant='persistent' 
            sx={{ width: 277,
                '& .MuiDrawer-paper': {
                    width: 277,
                    flexShrink: 0,
                    backgroundColor: '#f1f8fd',
                },
                }} open={open}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: (theme) => theme.spacing(0, 1),
                            ...((theme) => theme.mixins.toolbar),
                            justifyContent: 'flex-end',
                        }}
                    >
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                    <ClassCategories sectname={'Lower Division'}></ClassCategories>
                    <ClassCategories sectname={'Upper Division'}></ClassCategories>
                    <ClassCategories sectname={'Math'}></ClassCategories>
                    <ClassCategories sectname={'Physics'}></ClassCategories>
                    <ClassCategories sectname={'GEs'}></ClassCategories>
                    <ClassCategories sectname={'Others'}></ClassCategories>
                </Box>
            </Drawer>  
        </Box>  
    )
}

export default HomeSidebar;