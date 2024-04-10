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
  return (
    <div>Quiz</div>
  )
}

export default Quiz