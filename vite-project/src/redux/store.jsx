import {configureStore, } from '@reduxjs/toolkit';
import bgrReducer from '../features/navFeatures/burger';
import vdoReducer from '../videoSlice'

export const store = configureStore({
   reducer: {
     burger: bgrReducer,
     video: vdoReducer,
   },
})

