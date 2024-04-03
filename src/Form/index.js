import React from 'react';

const Form = () => (
<form className="form">
          <div>
            <input className="form__input" type="text"
              placeholder="Co jest do zrobienia?" />
          </div>
          <div className="form__addTask">
            <button className="form__button">Dodaj zadanie</button>
          </div>
        </form>
);

export default Form;