import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Resultados</h3>
          <p>{correctAnswers} de {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Tempo:</strong> {formatTime(time)}</p>
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Suas Respostas!</button>
          <button className="button is-success" onClick={onReset}>Tente Novamente!</button>
        </div>
      </div>
    </div>
  );
}

export default End;