import React from 'react';

const NewQuestionList = (props) => {
  return(
    <li>
      {props.newItem} - {props.newAns}
    </li>
  )
}

export default NewQuestionList;
