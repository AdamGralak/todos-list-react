import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import getExampleTasks from "./TasksList/getExampleTasks";
import { updateLocalStorageTasks } from "./updateLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }
    catch (error) {
        yield call(alert, "Coś poszło nie tak")
    }
};

function* saveTasksInLocalStorageHandler() {
    const {tasks} = yield select(selectTasks);
    yield call(updateLocalStorageTasks, tasks);
};

export function* sagaTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};