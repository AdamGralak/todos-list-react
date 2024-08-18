import React from "react";
import { StyledOptionButton } from "../../styled";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";

const GetExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <StyledOptionButton onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledOptionButton>
)};

export default GetExampleTasksButton;