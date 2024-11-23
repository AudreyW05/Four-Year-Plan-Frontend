import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { getNotifierValues, isNotifierShown, clearNotifications } from '@/modules/ui/uiSlice';
import { useSelector, useDispatch } from 'react-redux';

export type Severity = 'success' | 'error' | 'warning' | 'info' | 'loading';
export type NotifyOptions = {
  severity: Severity;
  message: string;
  autoHideDuration?: number;
};
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Notifier = () => {
  const dispatch = useDispatch();
  const options = useSelector(getNotifierValues);
  const isNotify = useSelector(isNotifierShown);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearNotifications());
  };

  const severity = options.severity === 'loading' ? 'info' : options.severity;
  const autoHideDuration = options.severity === 'loading' ? 60000 : options.autoHideDuration ? options.autoHideDuration : 5000;
  const isLoading = options.severity === 'loading';

  return (
    <Snackbar open={isNotify} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert {...(!isLoading && { onClose: handleClose })} severity={severity} sx={{ width: '100%', minWidth: '200px' }}>
        {isLoading && <LinearProgress sx={{ width: '100%', minWidth: '200px' }} />}
        {options.message}
      </Alert>
    </Snackbar>
  );
};

export default Notifier;
