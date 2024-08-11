import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true;
            });
        },
        setTaskDone: ({ tasks }, action) => {
            const index = tasks.findIndex(tasks => tasks.id === action.payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, action) => {
            const index = tasks.findIndex(tasks => tasks.id === action.payload);
            tasks = tasks.splice(index, 1);
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    setAllDone,
    setTaskDone,
    removeTask,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
