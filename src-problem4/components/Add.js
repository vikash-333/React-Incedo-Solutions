import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, postQuestions } from "../actions/actions";

//TODO:Get the State
const quizState = (state) => {
  return state.main;
};
export default function Add() {
  //TODO:Define UseSelector and UseDispatch
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();

  useEffect(() => {
    //TODO:Fetch the Global State using Dispatch
    dispatch(fetchQuestions());
  }, []);

  //TODO:Create a local State in structure of Questions array

  const [question, setQuestion] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  });
  const questionInput = (e) => {
    //TODO:Set question to question inputted by the user
    let newQuestion = { ...question };
    newQuestion.questionText = e.target.value;
    setQuestion(newQuestion);
  };
  const optionInput = (e, i) => {
    //TODO:Set options to options inputted by the user
    let newQuestion = { ...question };
    newQuestion.answerOptions[i].answerText = e.target.value;
    setQuestion(newQuestion);
  };
  const opIsCorrectInput = (e, i) => {
    //TODO:Set isCorrect to isCorrect inputted by the user
    let newQuestion = { ...question };

    newQuestion.answerOptions.forEach((ele, index) => {
      if (index == i) {
        ele.isCorrect = true;
      } else {
        ele.isCorrect = false;
      }
    });
    setQuestion(newQuestion);
  };

  const addOption = () => {
    //TODO:push an option in local state
    let newQuestion = { ...question };
    newQuestion.answerOptions.push({ answerText: "", isCorrect: false });
    setQuestion(newQuestion);
  };
  const addQuestion = () => {
    alert("Question Added");
    //TODO:Dispatch the local State
    dispatch(postQuestions(question));
  };

  let options = question.answerOptions.map((option, i) => {
    return (
      <div className="input-group mt-3">
        <span className="input-group-text">
          Enter Option {i + 1} and isCorrect(true/false)
        </span>
        <input
          type="text"
          aria-label="Option1"
          className="form-control"
          onChange={(e) => optionInput(e, i)}
          id="Question"
          value={option.answerText}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={(e) => opIsCorrectInput(e, i)}
            value="true"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Correct Answer
          </label>
        </div>
      </div>
    );
  });

  return (
    <div className="container row mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the Question"
          aria-label="Question"
          aria-describedby="basic-addon1"
          onChange={(e) => questionInput(e)}
          id="Question"
          value={question.questionText}
        />
      </div>

      {options}
      <button className="btn btn-primary col-2 mt-3 ms-2" onClick={addOption}>
        Add Option
      </button>
      <div className="container-fluid">
        <button
          className="btn btn-success col-2 mt-3 "
          onClick={() => addQuestion()}
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
