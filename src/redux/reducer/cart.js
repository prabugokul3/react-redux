// import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.list = [...state.list, payload];
        },
        removeItem: (state, { payload }) => {
            const index = state.list.findIndex((product) => product.id === payload.id);
            state.list = [...state.list.slice(0, index),
            ...state.list.slice(index + 1)];
        },
        modifyItem:(state, {payload}) => {
            const index = state.list.find((product) => product.id === payload.id);
            state.list = [...state.list.slice(0, index),
            {...state.list[index],count:payload.count},
            ...state.list.slice(index + 1)];
        }
    }
})

export const { addItem,removeItem,modifyItem } = cartSlice.actions;

export default cartSlice.reducer;