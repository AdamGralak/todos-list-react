import { configureStore } from '@reduxjs/toolkit';
import tasks from './features/tasks/tasksSlice';

export default configureStore({
    reducer: {
        tasks: tasks,
    },
});