import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.playload;
        },       
    },
});

export const { incrementByAmount } = appSlice.actions;

export const selectCount = (state) => state.app.value;

export default appSlice.reducer;