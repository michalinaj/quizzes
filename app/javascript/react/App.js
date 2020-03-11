import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // action: ''
    };
  }

  render() {
    return (
      <div>
        <QuestionShowContainer />
        <QuestionAddContainer />
      </div>
    );
  }
}

export default App;
