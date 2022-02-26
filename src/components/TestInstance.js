import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionInstance from "../components/TestInstanceComponents/QuestionInstance";
import Answers from "./TestInstanceComponents/Answers";

const TestInstance = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [questionCounter, setQuestionCounter] = useState(0);
  const [canStartTest, isCanStartTest] = useState(false);

  function shuffleArray(array) {
    if (array.length === 0) return array;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    const filterQuestions = async () => {
        const questionsToFilter = await fetchQuestions();
        const filteredQuestions = [];
        [...questionsToFilter].forEach((question) => {
          if (question.TestId === parseInt(id)) {
            filteredQuestions.push(question);
          }
        });
        shuffleArray(filteredQuestions);
        setQuestions(filteredQuestions);
        filterAnswers(filteredQuestions);
        
        console.log(questions[questionCounter])
      };
      const filterAnswers = async (filteredQuestions) => {
        const answersToFilter = await fetchAnswers();
        const filteredAnswers = [];
        [...answersToFilter].forEach((answer) => {
          if (filteredQuestions && answer.QuestionId === filteredQuestions[0].Id) {
            filteredAnswers.push(answer);
          }
        });
        setAnswers(filteredAnswers);
        
      };
      filterQuestions();
      

  }, [])

  const onStartTest  = () => {
    isCanStartTest(true);
    setCurrentQuestion(questions[questionCounter]);
    setCurrentAnswers(answers.filter((answer) => answer.QuestionId === currentQuestion.Id))
  }

  const fetchQuestions = async () => {
    //TODO: replace with agent
    const res = await fetch("http://localhost:5000/questions");
    const data = await res.json();
    return [...data];
  };

  const fetchAnswers = async () => {
    //TODO: replace with agent
    const res = await fetch("http://localhost:5000/answers");
    const data = await res.json();
    return [...data];
  };

  const onQuestionSubmit = async () => {
    setQuestionCounter(questionCounter + 1);
    setCurrentAnswers(answers);
  }

  return (
    <div>
      {(!canStartTest && answers && currentAnswers) ? 
        <div>
          <p>Welcome to the test! to start press begin:</p>
          <button 
            className="btn" 
            onClick={() => onStartTest()}>Start Test
          </button> 
        </div>
        :
        <QuestionInstance 
        currentQuestion={currentQuestion} 
        currentAnswers={currentAnswers}
        questionCounter={questionCounter}
        onQuestionSubmit={() => onQuestionSubmit()}
        />}
      
      
    </div>
  );
};

export default TestInstance;
// {answers.map((answer) => (
//   <AnswerInstance key={answer.Id} answer={answer} />
// ))}