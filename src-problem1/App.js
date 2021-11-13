import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  // TODO: Create states here
  
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [score, setscore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    // TODO:Increment score value when the answer is correct
    if(isCorrect === true)
    {
      setscore(score+1);
      
    }
  //Increment the QuestionNo value
  //      Increment CurrentQuestion value
    setcurrentQuestion(currentQuestion+1);

    //Set ShowScore value to true when the user has answered all the questions
    if(currentQuestion === questions.length-1){
      setShowScore(true);
    }
    };

  // console.log(questions.length);
  // console.log(currentQuestion);
  // console.log(showScore);
  // console.log(score);
  return (
    
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/
              {questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions.map((answerOption) => (
              <button
              key = {answerOption.answerText}
              /*TODO:Fire onClick Event */
              onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}
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
