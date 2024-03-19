import React, { useEffect } from 'react'
import { useState } from 'react'
import { getQuestionById, updateQuestion } from '../../utils/QuizService'
import { Link, useParams } from 'react-router-dom'

function UpdateQuestion() {

    const [question, setQuestion] = useState("")
    const [choices, setChoice] = useState([""])
    const [correctAnswer, setCorrectAnswer] = useState([""])
    const [isLoarding, setIsLoarding] = useState(true)
    
    const { id } = useParams()
    
    useEffect(() => {
        fetchQuestion()
    },[])

    const fetchQuestion = async() => {
        try {
            const questionToUpdate = await getQuestionById(id);
            if (questionToUpdate) {
                setQuestion(questionToUpdate.question)
                setChoice(questionToUpdate.choices)
                setCorrectAnswer(questionToUpdate.correctAnswer)
            }
            setIsLoarding(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleChoiceChange = (index , e) => {
        // setChoice(choices.map((choice , i)=> i === index ? value : choice))
        const updateChoices = [...choices]
        updateChoices[index] = e, target.value
        setChoice(updateChoices)
    }

    const handelCorrectAnswerChnage = (e) => {
        setCorrectAnswer(e.target.value)
    }

    const handleQuestionUpdate = async (e) => {
        e.preventDefault()
        try {
            const updatedQuestion = {
                question,
                choices,
                correctAnswers: correctAnswer.toString().split(",").map((answer)=>answer.trim())
            }
            await updateQuestion(id, updatedQuestion)
            /*Todo: navigate bact to all question page */
            
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoarding) {
        return <p>Loading...</p>
    }

  return (
      <div></div>
  )
}

export default UpdateQuestion