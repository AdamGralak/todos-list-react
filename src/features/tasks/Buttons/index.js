import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledOptionButton, StyledDiv } from './styled';
import { selectTasks,selectTasksStatus, toggleHideDone, setAllDone } from '../tasksSlice';

const Buttons = () => {
    const { tasks } = useSelector(selectTasks);
    const { hideDone } = useSelector(selectTasksStatus);
    const dispatch = useDispatch();

    if (tasks.length !== 0) {
        return (
            <StyledDiv>
                <StyledOptionButton
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledOptionButton>
                <StyledOptionButton
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Wyświetl ukończone" : "Ukryj ukończone"}
                </StyledOptionButton>
            </StyledDiv>
        );
    } else {
        return null;
    }
}

export default Buttons;
