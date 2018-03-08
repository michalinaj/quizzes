/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../react/App'

const QuizTitle = props => (
  <div>You are taking: {props.name}!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  const showQuestionDiv = document.getElementById('show-question');
  // const addQuestionDiv = document.getElementById('add-question');

  if(showQuestionDiv) {
  ReactDOM.render(
    // <QuizTitle name="Quizes Quiz" />,
    <App />,
    showQuestionDiv
  )
// } else if(addQuestionDiv) {
//   ReactDOM.render(
//     <OtherContainer />,
//     addQuestionDiv
//   )
}
})
