import { configureStore, combineReducers } from '@reduxjs/toolkit';
import uiReducer from '@/modules/ui/uiSlice';
import userReducer from '@/modules/user/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  ui: uiReducer,
  users: userReducer,
});

// Create a Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create the Persistor
export const persistor = persistStore(store);
