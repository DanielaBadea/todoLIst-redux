
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import { configureStore } from '@reduxjs/toolkit';
import { tasksReducier } from './tasksSlice';
import { filtersReducer } from './filterTasksSlice';

const persistConfig = {
    key: 'items',
    storage,
  };
  
  const persistedTasksReducer = persistReducer(persistConfig, tasksReducier);
  
  export const store = configureStore({
    reducer: {
        tasks: persistedTasksReducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);