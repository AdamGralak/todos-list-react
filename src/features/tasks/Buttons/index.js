import React from 'react';
import { StyledOptionButton, StyledDiv } from './styled';

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length !== 0) {
        return (
            <StyledDiv>
                <StyledOptionButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledOptionButton>
                <StyledOptionButton
                    onClick={toggleHideDone}
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
