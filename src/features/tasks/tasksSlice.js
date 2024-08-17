import { createSlice } from '@reduxjs/toolkit';

const updateLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateLocalStorageHideDone = (hideDone) => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        hideDone: JSON.parse(localStorage.getItem('hideDone')) || false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
            updateLocalStorage(tasks);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
            updateLocalStorageHideDone(state.hideDone);
            updateLocalStorage(state.tasks);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true;
            });
            updateLocalStorage(tasks);
        },
        setTaskDone: ({ tasks }, action) => {
            const index = tasks.findIndex(tasks => tasks.id === action.payload);
            tasks[index].done = !tasks[index].done;
            updateLocalStorage(tasks);
        },
        removeTask: ({ tasks }, action) => {
            const index = tasks.findIndex(tasks => tasks.id === action.payload);
            tasks.splice(index, 1);
            updateLocalStorage(tasks);
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
export const selectTasksStatus = state => state.tasks.hideDone;
export default tasksSlice.reducer;
