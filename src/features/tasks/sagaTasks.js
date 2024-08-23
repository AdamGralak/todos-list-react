import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks, fetchExampleTasksSuccess, fetchExampleTasksLoading } from "./tasksSlice";
import getExampleTasks from "./TasksPage/TasksList/getExampleTasks";
import { updateLocalStorageTasks } from "./updateLocalStorage";

function* fetchExampleTasksHandler() {
        try {
            yield put(fetchExampleTasksLoading());
            const exampleTasks = yield call(getExampleTasks);
            yield delay(600);
            yield put(setTasks(exampleTasks));
            yield put(fetchExampleTasksSuccess());
        }
        catch (error) {
            yield call(alert, "Coś poszło nie tak");
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