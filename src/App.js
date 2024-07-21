import React from 'react';
import './index.css';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import useTasks from './useTasks';


function App() {

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
          <Tasks
            removeTask={removeTask}
            tasks={tasks}
            hideDone={hideDone}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
}

export default App;
