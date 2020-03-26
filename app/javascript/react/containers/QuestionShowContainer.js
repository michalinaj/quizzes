import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: []
    }
    this.handleClick = this.handleClick.bind(this)
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

    render() {
      return(
        <div className="question__show-tile">
          <QuestionShowTile
            question = {this.state.question}
            answers = {this.state.answers}
          />
        <button className="button__play-quiz" onClick={this.handleClick}> Try another Question </button>
        </div>
      )
    }
}

export default QuestionShowContainer;
