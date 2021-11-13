import React, { useEffect, useState } from "react";

export default function App() {
  // TODO: Create the Questions State

  const [questions, setquestions] = useState({
    questions : []
  })
  // TODO:Fetch the json data in useEffect and set the State to fetched data

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then((res) => res.json())
    .then((questionsData)=>{
      setquestions(questionsData)
    })
    .catch(err => console.log(err))
    
  }, [])


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionNO, setQuestionNO] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      console.log("isCorrect", isCorrect);
      setScore(score + 1);
      console.log("score:", score);
    }

    const nextQuestion = currentQuestion + 1;
    const questionNumber = questionNO + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setQuestionNO(questionNumber);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionNO}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map((answerOption,i) => (
              <button
              key={i}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
