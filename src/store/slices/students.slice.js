import { createSlice } from '@reduxjs/toolkit';

export const studentsSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {
        addStudents: (state, action) => [...state, action.payload],
        deleteStudents: (state, action) => state.filter(item => item.id !== action.payload),
        updateStudent: (state, action) => state.map(item => item.id == action.payload.id ? action.payload : item)
    }
});

export const { addStudents, deleteStudents, updateStudent } = studentsSlice.actions;
export default studentsSlice.reducer;