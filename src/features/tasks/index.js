import React from 'react';
import Form from './TasksPage/Form'
import TasksList from './TasksPage/TasksList';
import Buttons from './TasksPage/Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import GetExampleTasksButton from './TasksPage/GetExampleTasksButton';
import { GlobalStyle } from '../../global.styled';

function Tasks() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form/>}
          extraHeaderContent={<GetExampleTasksButton/>}
        />
        <Section
          title="Lista zadań"
          extraHeaderContent={<Buttons/>}
          body={<TasksList/>}
        />
      </Container>
    </>
  );
}

export default Tasks;
