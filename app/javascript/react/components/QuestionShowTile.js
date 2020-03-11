import React from 'react';

const QuestionShowTile = props => {

  return (
    <div className="question-tile">
      <div className="question">
        <div className="question front">
          {props.question}
        </div>
        <div className="question front back">
          Answer
        </div>
      </div>
    </div>
  )
}

export default QuestionShowTile;
