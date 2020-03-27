import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      newQuestion: "",
      answers: [],
      newAnswers: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getFortune() {
    let quiz_id =window.location.href.match(/quizzes\/\d+/);
    quiz_id = quiz_id[0].match(/\d+/);
    let  question_id =window.location.href.match(/questions\/\d+/) ;
    question_id = question_id[0].match(/\d+/);

      fetch('/api/v1/quizzes/'+ quiz_id + '/questions/' + question_id)
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
          this.setState({
            question: body.question.body,
            answers: body.question.answers
          })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClick() {
    this.getFortune()
  }

  componentDidMount() {
    this.getFortune()
      }

  handleChange(event) {
    this.setState({ newQuestion: event.target.value })
  }

  handleSubmit(event) {
    let quiz_id =window.location.href.match(/quizzes\/\d+/);
    quiz_id = quiz_id[0].match(/\d+/);
    event.preventDefault()
    let formPayload = {
      qestion: this.state.newQuestion
    }
    fetch('/api/v1/question/', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
        this.setState({ question: body.question.text, newQuestion: "" })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

    render() {
      return(
        <div className="question__show-tile">
          <QuestionShowTile
            question = {this.state.question}
            answers = {this.state.answers}
          />
        <button className="button__play-quiz" onClick={this.handleClick}> Try another Question </button>

        <form onSubmit={this.handleSubmit}>
          <label>New Question:</label>
          <input
            type="text"
            value={this.state.newQuestion}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>

        </div>
      )
    }
}

export default QuestionShowContainer;
