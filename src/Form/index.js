import React, { useState } from 'react';

const Form = ({addNewTask}) => {

  const [newTaskContent, setNewtaskContent] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewtaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div>
        <input
          value={newTaskContent}
          className="form__input"
          type="text"
          placeholder="Co jest do zrobienia?"
          onChange={(e) => setNewtaskContent(e.target.value)}
        />
      </div>
      <div className="form__addTask">
        <button className="form__button">Dodaj zadanie</button>
      </div>
    </form>
  )
};

export default Form;