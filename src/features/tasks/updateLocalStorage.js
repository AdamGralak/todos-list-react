export const updateLocalStorageTasks = tasks => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getLocalStorageTasks = () => {
    const tasks = localStorage.getItem("tasks");

    if (!tasks) {
        return [];
    }

    try {
        return JSON.parse(tasks);
    } catch (error) {
        console.error("Błąd podczas parsowania JSON:", error);
        return [];
    }
};