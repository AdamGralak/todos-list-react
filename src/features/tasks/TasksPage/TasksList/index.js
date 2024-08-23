import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, TaskContent, StyledButton } from './styled';
import { selectTasks, setTaskDone, removeTask, selectTaskByQuery } from '../../tasksSlice';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import searchQueryParamName from './searchQueryParamName';

const TasksList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const  tasks  = useSelector(state => selectTaskByQuery(state, query));
    const {hideDone} = useSelector(selectTasks);
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </TaskContent>
                    <StyledButton
                        remove="true"
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑️
                    </StyledButton>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;
