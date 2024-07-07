import React from 'react';

const Buttons = (props) => {
    if (props.tasks.length !== 0) {
        return (
            <div className="section_Buttons">
                <button className="section__optionButton" disabled={props.tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
                <button className="section__optionButton">{props.hideDone ? "Wyświetl ukończone" : "Ukryj ukończone"}</button>
            </div>
        );
    } else {
        return null;
    }
}

export default Buttons;