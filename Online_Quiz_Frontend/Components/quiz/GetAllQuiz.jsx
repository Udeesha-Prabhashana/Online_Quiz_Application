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
      <section className="container">
          <div className="row mt-5">
              <div className="col-md-6 mb-2 md-mb-0" style={{color: "GrayText"}}>
                  <h4> All Questions</h4>
              </div>
              <div className="col-md-4 d-flex justify-content-end">
                  {/* Todo : add a link to navigate to add new question form */}
              </div>             
          </div>
          <hr />
          {isQuestionDeleted && <div className='alert alert-success'>{deleteSuccess}</div>}
          {questions.map((question, index) => {
              <div>           
                  <h4 style={{ color: "GrayText" }}> {`${ index + 1 }. ${ question.question }`} </h4>
                  
                  <ul>
                      {question.choices((choice, index) => {
                          <li key={index}>{ choice}</li>
                      })}
                  </ul>
                  <p className='text'>Correct Answer: {question.correctAnswers}</p>
                  <div className='btn-group mb-4'>
                      {/* Todo : add a link to navigate to update question form */}
                      <button className='btn btn-outline-danger btn-sm'
                      onClick={()=>(handleDelete(question.id))}>
                        Delete Question
                      </button>
                  </div>
              </div>
          })}
      </section>
  )
}

export default GetAllQuiz