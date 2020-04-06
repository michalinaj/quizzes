import React, { Component } from 'react';
import NewQuestionList from "../components/NewQuestionList";
import Question from '../images/question.svg';

class NewQuestionTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      newQuestion: {
             body: [],
             answers: []
           }
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
    this.setState({
        newQuestion: questionTemp
    })
  }
    handleAnswersChange(event) {
      let questionTemp = {
        answers : event.target.value,
        body : this.state.newQuestion.body
      }
      this.setState({
          newQuestion: questionTemp
      })
    }

  handleSubmit(event) {
    alert("New Question was submitted")
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
        this.setState({ question: body.question, newQuestion: [] })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  render() {



    return(
      <div className="panel">
      <img className="quiz-image__show" src={Question} />

      <form onSubmit={this.handleSubmit}>
        <label>New Question:</label>
        <input className="field"
          type="text"
          name="body"
          //value={this.state.newQuestion.body}
          onChange={this.handleBodyChange}
        />
        <label>Answer:</label>
        <input className="field"
          type="text"
          name="answers"
          //value={this.state.newQuestion.answers}
          onChange={this.handleAnswersChange}
        />
        <input className="button" type="submit" value="Submit" />
      </form>

      <br />
      <span>Your Added Questions:</span>
        <NewQuestionList
          newItem={this.state.newQuestion.body}
          newAns={this.state.newQuestion.answers}
        />

      </div>

    )
  }
}

export default NewQuestionTile;
