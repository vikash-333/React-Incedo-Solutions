import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions/actions";
import "./result.css";

//TODO:Get the State
const quizState = (state) => {
  return state.main
}
export default function Result() {
  //TODO:Define UseSelector and UseDispatch
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    //TODO:Fetch the  State using Dispatch
    dispatch(actions.fetchQuestions())
  }, []);
  console.log("Quiz", quiz);

  let result = quiz.questions.map((question, questionIndex) => {
    console.log("Print Quiz", question);
    return (
      <div
        className= {
         /*TODO:Set background color red if answer is wrong or green if answer is correct */
         quiz.selectedChoice[questionIndex] ? "app-correct container mt-5" : "app-wrong container mt-5"
        }
        
      >
        <div className="row">
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {question.id}</span>/{quiz.questions.length}
              </div>
              <div className="question-text">{question.questionText}</div>
            </div>
            <div className="answer-section">
              {question.answerOptions.map((answerOption) => (
                <button
                   className={
                     /*TODO:Set background color of correct answer to green */
                    answerOption.isCorrect == true ? "correct" : ""
                    }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        </div>
      </div>
    );
  });

  return <div>{result}</div>;
}
