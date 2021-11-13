import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchQuestions } from "../actions/actions";
import "./currentScore.css";

//TODO:Get the State
const quizState = (state) => {
  return state.main;
}

export default function CurrentScore() {
  //TODO:Define UseSelector and UseDispatch
  const quiz = useSelector(quizState);
  const dispatch = useDispatch();
  useEffect(() => {
    //TODO:Fetch the State using Dispatch
    dispatch(fetchQuestions())
  }, []);
  console.log("Quiz", quiz);
  console.log("Quiz score", quiz.score);
      
  return (
    <div className="current-score-section">
      You Current Score is {
      /*TODO:Print Score */
      quiz.score
      }
    </div>
  );
}
