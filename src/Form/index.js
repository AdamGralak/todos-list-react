import React, { useState, useRef } from 'react';

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
    <form className="form" onSubmit={onFormSubmit}>
      <div>
        <input
          value={newTaskContent}
          className="form__input"
          ref={inputFocus}
          type="text"
          placeholder="Co jest do zrobienia?"
          onChange={(e) => setNewtaskContent(e.target.value)}
        />
      </div>
      <div className="form__addTask">
        <button onClick = {onButtonClick} className="form__button">Dodaj zadanie</button>
      </div>
    </form>
  )
};

export default Form;