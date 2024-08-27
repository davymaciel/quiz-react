import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Front-End Quiz!</h1>
          <p>Boa Sorte!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Começar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;