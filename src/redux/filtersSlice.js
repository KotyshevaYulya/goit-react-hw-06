 import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: { name: "" },
    reducers: {changeFilter: (state, action) => {
             state.name = action.payload;
    }   
    }
    
})

export const { changeFilter } = slice.actions; 

export const selectFilter = state => state.filters.name;

export default slice.reducer; 

// export const changeFilter = createAction('filters/change');

// export const filterReduser = createReducer({ name: "" }, (builder) => {
//     builder
//         .addCase(changeFilter, (state, action) => {
//             state.name = action.payload;
//     })
// })
