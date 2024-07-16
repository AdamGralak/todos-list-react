import React from 'react';

const Tasks = ({ tasks, removeTask, hideDone, toggleTaskDone }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`section__task ${task.done && hideDone ? "section__task-hidden" : ""}`}
            >
                <button
                    className="task__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__item ${task.done ? "list__item--done" : ""}`}>
                    {task.content}</span>
                <button onClick={() => removeTask(task.id)} className="task__delete">🗑️</button>
            </li>
        ))}
    </ul>
)

export default Tasks;