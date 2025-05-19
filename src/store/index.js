import { configureStore } from '@reduxjs/toolkit';
import students from './slices/students.slice' //importar a mano

export default configureStore({
    reducer: {
        students,
    }
});