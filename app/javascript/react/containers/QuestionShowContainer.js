import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      answers: ''
    };
  }

    componentDidMount() {
      fetch('/api/v1/quizzes')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ title: body.quizzes[0].name });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
    render() {
      return(
      // <h2>You are taking "{this.state.title}" quiz!</h2>
      <QuestionShowTile
        body={this.state.question.body}
        answers={this.state.question.answers}
      />
      )
    }
}

export default QuestionShowContainer;
