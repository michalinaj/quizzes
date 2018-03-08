import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuizShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      // answers: ''
    };
  }

    componentDidMount() {
      fetch('/api/v1/quizzes.json')
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
          let quizName = body.quizzes.name;
          this.setState({ name: quizName });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
    render() {
      return(
      <h2>
        Your current quiz: {this.state.name}
      </h2>
      )
    }
}

export default QuizShowContainer;
