import React from "react";
import { GlobalStyle } from "../../../global.styled";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskByID } from "../tasksSlice";
import { StyledTaskInfo } from "./styled";

const Task = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskByID(state, id));
  
  if (!task) {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Header title="Szczegóły zadania" />
          <Section
            title={"Nie znaleziono zadania"}
          />
        </Container>
      </>
    )
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title="Szczegóły zadania" />
        <Section
          title={task ? task.content : "Nie znaleziono zadania"}
          body={
            <>
              <StyledTaskInfo>
                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
              </StyledTaskInfo>
            </>
          }
        />
      </Container>
    </>
  )
};

export default Task;