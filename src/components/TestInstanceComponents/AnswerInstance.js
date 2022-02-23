import React from 'react'

const AnswerInstance = ({answer}) => {
  return (
    <div>
        <p>{answer.Id}</p>
        <p>{answer.Content}</p>
    </div>
  )
}

export default AnswerInstance