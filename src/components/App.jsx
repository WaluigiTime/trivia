import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNumber = 2;
  return (
    <div className="app">
      Trivia
      <Question data={data} questionNumber={questionNumber} />
      <NextQuestion />
    </div>
  );
}

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
  return <div className="answer">Choice: {props.text}</div>;
}

function NextQuestion() {
  return (
    <div className="nextquestion">
      <button>Next Question</button>
    </div>
  );
}

export default App;
