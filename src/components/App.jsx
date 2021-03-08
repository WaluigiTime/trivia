import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let [isAnswered, setIsAnswered] = useState(false);
  // { isAnswered ? correct answer : "Click to reveal answer" }
  let questionNumber = 0;
  return (
    <div className="app">
      Trivia
      <button onClick={() => setIsAnswered(true)}>
        {isAnswered
          ? data[questionNumber].question.choices[
              data[questionNumber].question.correct_choice_index
            ]
          : "Answer"}
      </button>
      <Question data={data} questionNumber={questionNumber} />
      <NextQuestion />
    </div>
  );
}
// Create button element with setIsAnswered for onClick

function Question(props) {
  return (
    <div className="question">
      Question: {props.data[props.questionNumber].question.text}
      <Answer
        data={props.data}
        text={props.data[props.questionNumber].question.choices[0]}
      />
      <Answer text={props.data[props.questionNumber].question.choices[1]} />
      <Answer text={props.data[props.questionNumber].question.choices[2]} />
      <Answer text={props.data[props.questionNumber].question.choices[3]} />
    </div>
  );
}

function Answer(props) {
  return (
    <div className="answer">
      Choice: <button>{props.text}</button>
    </div>
  );
}

function NextQuestion() {
  return (
    <div className="nextquestion">
      <button>Next Question</button>
    </div>
  );
}

export default App;
