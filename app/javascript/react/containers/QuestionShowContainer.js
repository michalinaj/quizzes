import React, { Component } from "react"
import QuestionShowTile from "../components/QuestionShowTile"
import NewQuestionTile from "../components/NewQuestionTile"

class QuestionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
       question : [],
       currentQuestion : "",
       currentAnswer : "",
       currentId : 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.getRandomQuestion = this.getRandomQuestion.bind(this)
  }

  getRandomQuestion(){
    if (this.state.question.length > 1)
    {
      let randomId = Math.floor(Math.random() * this.state.question.length);
      while (randomId == this.state.currentId)
        randomId =  Math.floor(Math.random() * this.state.question.length);

      this.setState({currentQuestion : this.state.question[randomId].body,
                   currentAnswer : this.state.question[randomId].answers,
                   currentId: randomId})
    }
  }

  getQuestion() {
      let quizId = window.location.pathname.match(/quizzes\/\d+/g)[0].match(/\d+/g);

      fetch(`/api/v2/quizzes/${quizId}/questions`)
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
          if (body.question.length > 0)
            this.setState({
              question: body.question,
              currentQuestion : body.question[this.state.currentId].body,
              currentAnswer : body.question[this.state.currentId].answers
            })
          else
            this.setState({
              currentQuestion : "Sorry, there is no questions in this quiz.",
              currentAnswer : "And no answers...."
            })
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClick() {
    this.getRandomQuestion()
  }

  componentDidMount() {
    this.getQuestion()
      }

    render() {
      let intro = "Flashcards engage active recall which means that when you are attempting to remember a concept from scratch rather than simply reading it you will remember it better.  Using flashcards help ingrain memories deeper into your knowledge. Also.. repetition is key."


      return(
        <div className="question__show-tile">
          <span className="intro">Did you know?</span>
          <p className="sub-intro">{intro}</p>
          <QuestionShowTile
            question = {this.state.currentQuestion}
            answers = {this.state.currentAnswer}
          />
          <button className="button__play-quiz" onClick={this.handleClick}> Try another Question </button>

        </div>
      )
    }
}

export default QuestionShowContainer;
