import {configureStore, } from '@reduxjs/toolkit';
import bgrReducer from '../features/navFeatures/burger';

export const store = configureStore({
   reducer: {
     burger: bgrReducer
   },
})

