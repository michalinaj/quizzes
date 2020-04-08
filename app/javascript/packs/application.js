import React from 'react'
import ReactDOM from 'react-dom'
import App from '../react/App'
import QuestionAddContainer from '../react/containers/QuestionAddContainer'
import QuestionShowContainer from '../react/containers/QuestionShowContainer'
import QuestionShowTile from '../react/components/NewQuestionTile'


document.addEventListener('DOMContentLoaded', () => {
  const showQuestionDiv = document.getElementById('show-question');
  const addQuestionDiv = document.getElementById('add-question');

  if(showQuestionDiv) {
  ReactDOM.render(
    <QuestionShowContainer />,
    showQuestionDiv
  )
} else if(addQuestionDiv) {
  ReactDOM.render(
    <QuestionAddContainer />,
    addQuestionDiv
  )
}
})
