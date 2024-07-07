import React from 'react';

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li
                className={`section__task ${task.done && props.hideDone ? "section__task-hidden" : ""}`}>
                <button className="task__button"> {task.done ? "✓" : ""}</button>
                <span className={`list__item ${task.done ? "list__item--done" : ""}`}>
                    {task.content}</span>
                <button className="task__delete">🗑️</button>
            </li>
        ))}
    </ul>
)

export default Tasks;