import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm, StyledInput, StyledDiv, StyledButton } from './styled';
import { addTask } from '../../tasksSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {

  const [newTaskContent, setNewtaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    const trimedNewTaskContent = newTaskContent.trim();
    e.preventDefault();
    if (trimedNewTaskContent === "") {
      return;
    }

    dispatch(addTask({
      content: trimedNewTaskContent,
      done: false,
      id: nanoid(),
    }))

    setNewtaskContent("");
  };

  const inputFocus = useRef(null);

  const onButtonClick = () => {
    inputFocus.current.focus();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <div>
        <StyledInput
          value={newTaskContent}
          ref={inputFocus}
          type="text"
          placeholder="Co jest do zrobienia?"
          onChange={(e) => setNewtaskContent(e.target.value)}
        />
      </div>
      <StyledDiv>
        <StyledButton onClick={onButtonClick}>Dodaj zadanie</StyledButton>
      </StyledDiv>
    </StyledForm>
  )
};

export default Form;