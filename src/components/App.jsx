import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNumber = 0;
  return (
    <div className="app">
      Trivia
      <Question value={data[questionNumber].question.text} />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div className="question">Question: {props.value}</div>;
}

function NextQuestion() {
  return (
    <div className="nextquestion">
      <button>This is a not funny button</button>
    </div>
  );
}

export default App;
