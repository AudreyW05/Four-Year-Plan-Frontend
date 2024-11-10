import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, DialogProps } from '@mui/material';

type Props = {
  onClose: () => void;
};

const Settings = (props: Props) => {
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClose = () => {
    props.onClose();
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (descriptionElementRef.current !== null) {
      descriptionElementRef.current.focus();
    }
  }, []);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      <DialogTitle id='scroll-dialog-title'>Settings</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
          {/* Content for settings can go here */}
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
