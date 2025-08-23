import { createSlice } from "@reduxjs/toolkit";


export const burgerSlice = createSlice({
    name: 'burger',
    initialState: {
        value: true
    },
    reducers: {
      toggle: (state) => {
        state.value = !state.value
      }
    }
})


export  const {toggle} = burgerSlice.actions;
export default burgerSlice.reducer;