import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { UserData } from '@/modules/user/types';

interface UserState {
  currentUser: UserData | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: state => {
      state.currentUser = null;
    },
  },
});

export const { updateCurrentUser, removeCurrentUser } = usersSlice.actions;

export const getCurrentUser = (state: RootState): UserData | null => {
  return state.users.currentUser;
};

export default usersSlice.reducer;
