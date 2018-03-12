import React, { Component } from 'react';
import QuestionShowContainer from './containers/QuestionShowContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <div>
        <QuestionShowContainer />
      </div>
    );
  }
}

export default App;
