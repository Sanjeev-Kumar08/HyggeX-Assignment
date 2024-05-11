import React from 'react'
import questionData from '../app/data'
import Accordion from './Accordion'

function Faq() {
  console.log(questionData)
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">FAQ:</h1>
    {
      questionData.map((question)=>(
        <Accordion key={question.id} question={question.question} answer={question.answer} />
      ))
    }
  </div>
  )
}

export default Faq