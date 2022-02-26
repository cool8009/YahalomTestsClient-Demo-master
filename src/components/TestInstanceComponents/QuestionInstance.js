import React, {useState, useEffect} from 'react'
import Answers from './Answers';

const QuestionInstance = ({ currentQuestion, currentAnswers, onQuestionSubmit, questionCounter }) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [isTrueAnswers, setIsTrueAnswers] = useState(false);
    
    useEffect(() => {
        //array shuffler
        
    }, [])
  return (
    <div className='test-container'>
        <p></p>
        <p>{currentQuestion.Title}</p>
        <Answers currentAnswers={currentAnswers} isChecked={isChecked}/>
        <button type='submit' onClick={onQuestionSubmit}>Submit</button>
        <p>Current question: {questionCounter}</p> 
    </div>
  )
}

export default QuestionInstance