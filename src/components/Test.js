import React from 'react'

const Test = ({test}) => {
  return (
        <div className="test"> 
            <h2>{test.Title}</h2>
            <p>{test.Intro}</p>
            <p>{test.MinimumToPass}</p>
        </div>

  )
}

export default Test