export const updateLocalStorageTasks = tasks => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getLocalStorageTasks = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];