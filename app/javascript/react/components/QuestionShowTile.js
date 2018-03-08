import React from 'react';

const QuestionShowTile = (props) => {
  return (
    <div className="panel question-show">
      {props.body}
      {props.answers}
    </div>

    // <div className="panel answer-show">
    // {/* </div> */}
  )
}

export default QuestionShowTile;
