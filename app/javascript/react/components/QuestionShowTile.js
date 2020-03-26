import React from 'react';

const QuestionShowTile = (props) => {

  return(
    <div className="question-tile">
      <div className="question">
        <div className="question front">
          {props.question}
        </div>
        <div className="question front back">
          {props.answers}
        </div>
      </div>
    </div>
  )
}

// class QuestionShowTile extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       question: [],
//       answer: []
//     }
//   }
//
//
//
// render() {
//   return (
//     <div className="question-tile">
//       <div className="question">
//         <div className="question front">
//           {this.state.question}
//         </div>
//         <div className="question front back">
//           {this.state.answer}
//         </div>
//       </div>
//     </div>
//     )
//   }
// }

export default QuestionShowTile;
