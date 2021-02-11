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
      <Answer data={props.data} questionNumber={props.questionNumber} />
    </div>
  );
}

function Answer(props) {
  return (
    <div className="answer">
      Answer: {props.data[props.questionNumber].question.correct_choice_index}{" "}
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
