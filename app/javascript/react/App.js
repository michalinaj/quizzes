import React, { Component } from 'react';
import QuizShowContainer from './containers/QuizShowContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    let quiz = this.state.quiz
    // let questions = this.state.questions.map(question => {
    //   return <li>{question.body}</li>;
    // });

    return (
      <div>
        <h1>{quiz}</h1>
        <QuizShowContainer />
      </div>
    );
  }
}

export default App;
