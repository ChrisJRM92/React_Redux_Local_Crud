import { configureStore } from '@reduxjs/toolkit';
import students from './slices/students.slice' //importar a mano
import studentSelected from './slices/studentSelected.slice' //manual import

export default configureStore({
    reducer: {
        students,
        studentSelected,
    }
});