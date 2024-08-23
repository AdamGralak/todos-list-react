import React from "react";
import { StyledOptionButton } from "../../styled";
import { fetchExampleTasks, selectTasks } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const GetExampleTasksButton = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectTasks);

    return (
        <StyledOptionButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledOptionButton>
    )
};

export default GetExampleTasksButton;