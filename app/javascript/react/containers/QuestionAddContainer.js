import React, { Component } from "react";
import NewQuestionTile from "../components/NewQuestionTile";

class QuestionAddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <NewQuestionTile />
      </div>
    )
  }
}

export default QuestionAddContainer;
