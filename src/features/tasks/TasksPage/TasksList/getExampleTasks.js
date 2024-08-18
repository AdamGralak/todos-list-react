const getExamleTasks = async () => {
    const response = await fetch("/todos-list-react/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    };

    return await response.json();
};

export default getExamleTasks;