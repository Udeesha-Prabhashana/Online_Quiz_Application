import React, { useEffect } from 'react'           //rafce
import { GetAllQuestions, deleteQuestion } from '../../utils/QuizService'

const GetAllQuiz = () => {

    const [questions, setQuestions] = useState([
		{ id: "", question: "", correctAnswers: "", choices: [] }
	])
	const [isLoading, setIsLoading] = useState(true)
	const [isQuestionDeleted, setIsQuestionDeleted] = useState(false)
	const [deleteSuccess, setDeleteSuccess] = useState("")

    useEffect(() => {
       fetchAllQuestion() 
    },[])

    const fetchAllQuestion = async() => {
        try {
            const data = await GetAllQuestions()
            setQuestions(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteQuestion(id)
            setQuestions(questions.filter((question) => question.id !== id))
            setIsQuestionDeleted(true)
            setDeleteSuccess("Question delete successfully")
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {
            setDeleteSuccess("")
        },4000)
    }

    if (isLoading) {
		return <p>Loading...</p>
	}

  return (
    <div></div>
  )
}

export default GetAllQuiz