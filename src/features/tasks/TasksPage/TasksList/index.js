import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, TaskContent, StyledButton } from './styled';
import { selectTasks, setTaskDone, removeTask } from '../../tasksSlice';

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks)
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <StyledButton
                        onClick={() => dispatch(setTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </StyledButton>
                    <TaskContent isdone={task.done ? "true" : "false"}>
                        {task.content}
                    </TaskContent>
                    <StyledButton
                        remove="true"
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑️
                    </StyledButton>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;
