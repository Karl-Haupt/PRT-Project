import React, { useState, useEffect } from 'react';
import './Questions.css';
import { useDispatch, useSelector } from 'react-redux';
// import { useMatch, } from 'react-router-dom';
import { useAlert } from 'react-alert';

import { getCourse, clearErrors } from '../../Redux/Actions/courseActions';

const QuestionPaper = ({ match }) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    // const match = useMatch();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const { loading, course, error } = useSelector(state => state.course);
    
    useEffect(() => {
        dispatch(getCourse(match.params.course));

        if(error) {
            alert.error(error.trace);
            dispatch(clearErrors());
        }
        

    }, [dispatch, match, alert])

    console.log(" ERROR: " + error)
    const { questions } = course
    console.log(" this is " + questions)
    
    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect == true) {
        setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        // if(nextQuestion < questions.length) {
        // setCurrentQuestion(nextQuestion);
        // } else {
        // setShowScore(true);
        // }
    }

    const handleStartOver = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
    }
    return (
        <div className="questions">
            

            <div className="questions__wrap">
                
            <h1>Questions: Test Driven Development</h1>
            

            <div className="question__courses">
            {showScore ? (
                <div>
                {/* <div className="score-section"> Your scored {score} out of {questions.length} </div> */}

                <button onClick={handleStartOver} className="questions__startOver">Start Over</button>
                </div>
            ) : (
                <>
                <div className="question__section">
                    <div className="question__count">
                        {/* <span>Question {currentQuestion + 1}</span>/{questions.length} */}
                    </div>

                    {/* <div className="question__text">{questions[currentQuestion].questionText}</div> */}

                    <hr />
                </div>

                <div className="answer__section">
                    {/* {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                        {answerOption.answerText}
                    </button>
                    ))} */}
                </div>
                </>
            )}
                </div>

            </div>
        </div>
    )
}

export default QuestionPaper
