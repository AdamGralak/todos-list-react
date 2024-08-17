import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageTasks } from './updateLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getLocalStorageTasks() || [],
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
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    setAllDone,
    setTaskDone,
    removeTask,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectTasksStatus = state => state.tasks.hideDone;
export default tasksSlice.reducer;
