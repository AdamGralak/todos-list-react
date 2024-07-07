import React from 'react';
import './index.css';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';




const tasks = [
  { id: 1, content: "odrobić lekcje", done: true },
  { id: 2, content: "przejść na reacta", done: false },
];

let hideDone = false;

function App() {
  return (

    <Container>

      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
