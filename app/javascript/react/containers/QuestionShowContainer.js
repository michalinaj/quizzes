import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

    render() {
      return(
        <div>
          <QuestionShowTile />
        </div>
      )
    }

  //
  //   this.updateQuestion = this.updateQuestion.bind(this);
  //
  //   this.state = {
  //     questions: [],
  //     currentQuestion: {}
  //   };
  // }
  //
  //   componentWillMount() {
  //     fetch('/api/v1/quizzes/{id}/questions.json')
  //       .then(response => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           let errorMessage = `${response.status} (${response.statusText})`
  //             error = new Error(errorMessage);
  //           throw(error);
  //         }
  //       })
  //       .then(response => response.json())
  //       .then(body => {
  //         const currentQuestions = this.state.questions
  //         currentQuestions.push({
  //           key: currentQuestions.id,
  //           body: currentQuestions.body,
  //           answers: currentQuestions.answers
  //         })
  //         this.setState({
  //           questions: currentQuestions,
  //           currentQuestion: this.getRandomQuestion(currentQuestions),
  //         })
  //       })
  //       .catch(error => console.error(`Error in fetch: ${error.message}`));
  //     }
  //       getRandomQuestion(currentQuestions) {
  //       var question = currentQuestions[Math.floor(Math.random() * currentQuestions.lenght)];
  //       return(question);
  //   }
  //
  //   updateQuestion(){
  //     const currentQuestions = this.state.questions;
  //     this.setState({
  //       currentQuestion: this.getRandomQuestion(currentQuestions)
  //     })
  //   }
  //
    // render() {
    //   return(
    // <div>
  //     <div className="question-row">
  //     <QuestionShowTile
  //       body={this.state.currentQuestion.body}
  //       answer={this.state.currentQuestion.answers}
  //     />
    // </div>
  //     <div className="button-row">
  //     <NewQuestion nextQuestion={this.updateQuestion}
  //     />
  //     </div>
  //   </div>
      // )
    // }
}

export default QuestionShowContainer;
