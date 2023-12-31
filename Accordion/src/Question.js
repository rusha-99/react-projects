import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (data) => {
  const [showInfo, setShowInfo] = useState(false)
const{title,info} = data
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (<AiOutlineMinus/>):(<AiOutlinePlus/>)}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
