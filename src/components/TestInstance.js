import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionInstance from "../components/TestInstanceComponents/QuestionInstance";
import AnswerInstance from "../components/TestInstanceComponents/AnswerInstance";

const TestInstance = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

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
        setQuestions(filteredQuestions);
        filterAnswers(filteredQuestions);
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


  const fetchQuestions = async () => {
    //TODO: replace with agent
    const res = await fetch("http://localhost:5000/questions");
    const data = await res.json();
    console.log(data);
    return [...data];
  };

  const fetchAnswers = async () => {
    //TODO: replace with agent
    const res = await fetch("http://localhost:5000/answers");
    const data = await res.json();
    console.log(data);
    return [...data];
  };

  return (
    <div>
      <p>TestInstance {id}</p>
      {questions.map((question) => (
        <QuestionInstance key={question.Id} question={question} />
      ))}
      {answers.map((answer) => (
        <AnswerInstance key={answer.Id} answer={answer} />
      ))}
    </div>
  );
};

export default TestInstance;
