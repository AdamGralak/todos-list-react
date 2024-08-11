import React from 'react';
import { List, Item, TaskContent, StyledButton } from './styled';

const TasksList = ({ tasks, removeTask, hideDone, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <StyledButton
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </StyledButton>
                <TaskContent done={task.done}>
                    {task.content}
                </TaskContent>
                <StyledButton remove="true" onClick={() => removeTask(task.id)} className="task__delete">🗑️</StyledButton>
            </Item>
        ))}
    </List>
)

export default TasksList;
