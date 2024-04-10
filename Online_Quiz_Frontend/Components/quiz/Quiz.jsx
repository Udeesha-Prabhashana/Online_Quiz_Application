import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { fetchQuizForUser } from '../../utils/QuizService'
const Quiz = () => {

    const [quizQuestions, setQuizQuestions] = useState([{
        id:"", correctAnswer:"" , question: "" ,questionType: ""
    }])
    const [selectedAnswers, setSelectedAnswers] = useState([{ id: "", answer: "" }])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [totalScores, setTotalScores] = useState(0)
	const location = useLocation
	const navigate = useNavigate()
    const { selectedSubject, selectedNumQuestions } = location.state
    

    useEffect(()=> {
        fetchQuizData()
    },[])

    const fetchQuizData = async() => {
        if (selectedSubject && selectedNumQuestions) {
            const questions = await fetchQuizForUser(selectedNumQuestions, selectedSubject)
            setQuizQuestions(questions)
        }
    }

    const handleAnswerChange = (questionId , answer ) => {
        setSelectedAnswers((prevAnswer) => {
            const existingAnswerIndex = prevAnswer.findIndex((answerObj)=>answerObj.id === questionId )
        })
    }
  return (
    <div>Quiz</div>
  )
}

export default Quiz