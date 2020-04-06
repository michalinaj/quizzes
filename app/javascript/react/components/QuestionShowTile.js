import React from 'react';

const QuestionShowTile = (props) => {
  const question = props.question
  const answers = props.answers

  return(
    <div className="question-tile">
      <div className="question">
        <div className="question front">
          {question}
        </div>
        <div className="question front back">
          {answers}
        </div>
      </div>
    </div>
  )
}

export default QuestionShowTile;
