import React from 'react';

const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
    if (tasks.length !== 0) {
        return (
            <div className="section_Buttons">
                <button className="section__optionButton" disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
                <button
                    onClick={toggleHideDone}
                    className="section__optionButton">
                    {hideDone ? "Wyświetl ukończone" : "Ukryj ukończone"}
                </button>
            </div>
        );
    } else {
        return null;
    }
}

export default Buttons;