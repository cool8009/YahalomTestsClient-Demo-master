import React from 'react'

const QuestionInstance = ({ question }) => {
  return (
    <div>
        <p>{question.Id}</p>
        <p>{question.Title}</p>
    </div>
  )
}

export default QuestionInstance