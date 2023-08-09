import React, { useState } from 'react';
import data from './data';
//import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [question,setQuestion]= useState(data)  //returns an array
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {question.map((question) => {
            return <Question key={ question.id} {...question} />
        })}   

          
        </section>
      </div>
</main>
  )
}

export default App;
