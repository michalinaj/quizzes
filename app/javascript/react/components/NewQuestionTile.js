import React, { Component } from 'react';

import Question from '../images/question.svg';

class NewQuestionTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      newQuestion: {
             body: [],
             answers: []
           },
           visible: false
         }

    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleAnswersChange = this.handleAnswersChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange(event) {
    let questionTemp = {
      body : event.target.value,
      answers : this.state.newQuestion.answers
    }
    this.setState(
      { newQuestion: questionTemp,
        visible: false }
    )
  }
  handleAnswersChange(event) {
      let questionTemp = {
        answers : event.target.value,
        body : this.state.newQuestion.body
      }
      this.setState(
        { newQuestion: questionTemp,
          visible: false }
      )
    }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      question: this.state.newQuestion
    }

    let quizId = window.location.pathname.match(/quizzes\/\d+/g)[0].match(/\d+/g);



    fetch(`/api/v2/quizzes/${quizId}/questions`, {
      //credentials: "same-origin",
      //
      method: "POST",
      body: JSON.stringify(formPayload),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ newQuestion: {
                          body: '',
                          answers: ''
                        },
                         visible: true
           });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  render() {

    return(
      <div className="panel">
      <img className="quiz-image__show" src={Question} />

      <h3 className={this.state.visible?'fadeIn':'fadeOut' } >Thank you for submitting your question! </h3>

      <form onSubmit={this.handleSubmit}>
        <label>New Question:</label>
        <input className="field"
          type="text"
          name="body"
          value={this.state.newQuestion.body}
          onChange={this.handleBodyChange}
        />
        <label>Answer:</label>
        <input className="field"
          type="text"
          name="answers"
          value={this.state.newQuestion.answers}
          onChange={this.handleAnswersChange}
        />
        <input className="button" type="submit" value="Submit" />
      </form>

      </div>

    )
  }
}

export default NewQuestionTile;
