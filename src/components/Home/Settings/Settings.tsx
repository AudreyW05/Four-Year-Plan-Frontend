import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import '@components/Home/Settings/Settings.css';

// Define the type for the onClose prop
interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  return (
    <div className='settings-overlay'>
      <Box className='settings-container'>
        <Button className='close-button' onClick={onClose}>
          ✕
        </Button>
        <Typography variant='h6' className='settings-header'>
          Settings
        </Typography>
        <ul className='settings-list'>
          <li>Edit Satisfied Courses</li>
          <li>Sign Out</li>
        </ul>
        {/* Add other sections based on your design */}
      </Box>
    </div>
  );
};

export default Settings;
