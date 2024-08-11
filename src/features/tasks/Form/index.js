import React, { useState, useRef } from 'react';
import { StyledForm, StyledInput, StyledDiv, StyledButton } from './styled';

const Form = ({ addNewTask }) => {

  const [newTaskContent, setNewtaskContent] = useState("");

  const onFormSubmit = (e) => {
    const trimedNewTaskContent = newTaskContent.trim();
    e.preventDefault();
    if (trimedNewTaskContent === "") {
      return;
    }
    addNewTask(trimedNewTaskContent);
    setNewtaskContent("");
  };

  const inputFocus = useRef(null);

  const onButtonClick = ()=>{
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
        <StyledButton onClick = {onButtonClick}>Dodaj zadanie</StyledButton>
      </StyledDiv>
    </StyledForm>
  )
};

export default Form;