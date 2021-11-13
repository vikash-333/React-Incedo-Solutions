export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const INCREMENT_CURRENT_QUESTION = "INCREMENT_CURRENT_QUESTION";

export const fetchQuestions = () => {
  return (dispatch) => {
    //TODO:1.Fetch the data from the server
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //2.Dispatch the fetched data to the reducer
        dispatch({type: FETCH_QUESTIONS, payload: data});
      })
      .catch(err => console.log(err));
    
  };
};

export const incrementCurrentQuestion = (isCorrect) => {
  //TODO:Dispatch an action to the reducer
  return {type: INCREMENT_CURRENT_QUESTION, payload: { isCorrect }};
  
};
