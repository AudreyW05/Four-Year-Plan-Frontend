import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotifyOptions } from '@components/Notifier/Notifier';
import { severity } from '@/constants/constants';
import type { RootState } from '@/app/store';

type UIState = {
  notifier: NotifyOptions;
  notifierIsShown: boolean;
};

const initialState: UIState = {
  notifier: {
    severity: severity.INFO,
    message: '',
  },
  notifierIsShown: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleShowNotification: (state, action: PayloadAction<NotifyOptions>) => {
      const notifySettings = action.payload;
      state.notifier = { ...notifySettings };
      state.notifierIsShown = true;
    },
    clearNotifications: state => {
      state.notifierIsShown = false;
    },
  },
});

export const { toggleShowNotification, clearNotifications } = uiSlice.actions;

export const isNotifierShown = (state: RootState): boolean => {
  return state.ui.notifierIsShown;
};

export const getNotifierValues = (state: RootState): NotifyOptions => {
  return state.ui.notifier;
};

export default uiSlice.reducer;
