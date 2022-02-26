import React from "react";
import AnswerInstance from "./AnswerInstance";

const Answers = ({ currentAnswers }) => {
  return (
    <div>
      {currentAnswers.map((answer) => (       
        <AnswerInstance key={answer.Id} answer={answer}  />
      ))}
    </div>
  );
};

export default Answers;
