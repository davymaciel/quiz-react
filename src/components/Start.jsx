import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Bem-vindo ao Quiz!</h1>
          <p>Número de questões: 5</p>
          <p>Boa Sorte!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Começar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;