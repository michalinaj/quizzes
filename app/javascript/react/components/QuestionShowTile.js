import React, { Component } from 'react';

class QuestionShowTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: [],
      answer: []
    }
  }

  componentDidMount() {
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
            answer: body.question.answer
          })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

render() {
  return (
    <div className="question-tile">
      <div className="question">
        <div className="question front">
          {this.state.question}
        </div>
        <div className="question front back">
          {this.state.answer}
        </div>
      </div>
    </div>
    )
  }
}

export default QuestionShowTile;
