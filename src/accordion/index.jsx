import React, {useState} from 'react'
import data from './data'
import SingleQuestion from './question'
import './style.css'

const AccordionPage = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <main className='question-container'>
            <div className='container-question'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <SingleQuestion key = {question.id} {...question}></SingleQuestion>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}

export default AccordionPage