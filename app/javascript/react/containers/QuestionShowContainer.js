import React, { Component } from "react";
import QuestionShowTile from "../components/QuestionShowTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answers: []
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
              answers: body.question.answers
            })
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`))
      }

    render() {
      return(
        <div>
          <QuestionShowTile
            question = {this.state.question}
            answers = {this.state.answers}
          />
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
