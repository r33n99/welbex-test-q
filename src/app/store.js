import { configureStore } from '@reduxjs/toolkit';

import tableSlice from '../features/tableSlice';

export const store = configureStore({
    reducer: {
        table: tableSlice,
    },
});
