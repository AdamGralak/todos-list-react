import React from 'react';
import Form from './Form';
import TasksList from './TasksList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import useTasks from '../../useTasks';
import { GlobalStyle } from '../../global.styled';

function Tasks() {
  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <TasksList
              removeTask={removeTask}
              tasks={tasks}
              hideDone={hideDone}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </>
  );
}

export default Tasks;
