import { all } from "redux-saga/effects";
import { sagaTasks } from "./sagaTasks";

export default function* rootSaga(){
    yield all([
        sagaTasks(),
    ])
};