import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageTasks } from './updateLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getLocalStorageTasks(),
        hideDone: false,
        loading: false,
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
        fetchExampleTasks: (state) => {},
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasksSuccess: (state) => {
            state.loading = false;
        },
        fetchExampleTasksLoading: (state) => {
            state.loading = true;
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
    fetchExampleTasksLoading,
    fetchExampleTasksSuccess,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectTasksStatus = state => state.tasks.hideDone;
export const getTaskByID = (state, taskID) => {
    const tasks = selectTasks(state).tasks;
    return tasks.find(task => task.id === taskID);
};
export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state).tasks;
    if(!query || query.trim() === ""){
        return tasks;
    }
    return tasks.filter(({content})=> content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;
