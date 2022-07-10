import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    table: [],
    loading: false,
    error: '',
    value: null,
    column: null,
    condition: null,
};

export const fetchTable = createAsyncThunk('table/fetchTable', async () => {
    const response = await axios.get('http://localhost:3001/rows');
    return response.data;
});

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.value = action.payload.value;
            state.column = action.payload.column;
            state.condition = action.payload.condition;
        },
        resetFilterData: (state) => {
            state.value = null;
            state.column = null;
            state.condition = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTable.pending, (state) => {
                state.loading = true;
                state.table = [];
                state.error = null;
            })
            .addCase(fetchTable.fulfilled, (state, action) => {
                state.loading = false;
                state.table = action.payload;
            })
            .addCase(fetchTable.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilterData, resetFilterData } = tableSlice.actions;
export const SelectTable = (state) => state.table;

export default tableSlice.reducer;
