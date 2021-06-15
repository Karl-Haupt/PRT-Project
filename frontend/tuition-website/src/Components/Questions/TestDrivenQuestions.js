import React, { useState } from 'react';
import './Questions.css';

function TestDrivenQuestions() {
    const questions = [
        {
          questionText: "Refactoring is not one of the stages of TDD,True or False",
          answerOptions: [
            {answerText: "True", isCorrect: false},
            {answerText: "False", isCorrect: true},
          ],
        },
         {
          questionText: "TDD required a developer to write the test cases before writing the actual production code.True or False",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
         {
          questionText: "TDD is basicaly Unit Testing,True or False",
          answerOptions: [
            {answerText: "True", isCorrect: false},
            {answerText: "False", isCorrect: true},
          ],
        },
         {
          questionText: "TDD can help a developer improve his initial design of a method by forcing him to come up with situations in which the test case can fail",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
          {
          questionText: "TDD does not help in detection of bugs at an early developmental stages of SDLC.",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
          {
          questionText: "TDD can help a developer improve his initial design of a method by forcing him to come up with situations in which the test case can fail",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
          {
          questionText: "Git Flow is organized around releases, where there is potentially a significant amount of work in development at any given time that hasn’t been approved for production and GitHub Flow, there is no strict separation between your main branch and your development branch. This makes things like hotfixes redundant.True or False",
          answerOptions: [
            {answerText: "True", isCorrect: false},
            {answerText: "False", isCorrect: true},
          ],
        },
          {
          questionText: "There are _____ types of TDD.",
          answerOptions: [
            {answerText: "5", isCorrect: false},
            {answerText: "3", isCorrect: false},
            {answerText: "2", isCorrect: true},
          ],
        },
          {
          questionText: "ATDD is also called __________",
          answerOptions: [
            {answerText: "SDD", isCorrect: false},
            {answerText: "Behavior Driven Development", isCorrect: true},
            {answerText: "Acceptance test–driven development", isCorrect: false},
          
          ],
        }
      ]
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
    
      const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect == true) {
          setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
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
                  <div className="score-section"> Your scored {score} out of {questions.length} </div>

                  <button onClick={handleStartOver} className="questions__startOver">Start Over</button>
                </div>
              ) : (
                  <>
                  <div className="question__section">
                      <div className="question__count">
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                      </div>

                      <div className="question__text">{questions[currentQuestion].questionText}</div>

                      <hr />
                  </div>

                  <div className="answer__section">
                      {questions[currentQuestion].answerOptions.map((answerOption) => (
                      <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                          {answerOption.answerText}
                      </button>
                      ))}
                  </div>
                  </>
              )}
                  </div>

            </div>
        </div>
    )
}

export default TestDrivenQuestions;
