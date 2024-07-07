import React, { useState } from 'react';
import './index.css';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';


function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "odrobić lekcje", done: true },
    { id: 2, content: "przejść na reacta", done: false },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      };
      return task;
    }))
  };

  return (

    <Container>

      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
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
