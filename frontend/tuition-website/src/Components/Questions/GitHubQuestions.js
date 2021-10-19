import React, { useState } from 'react';
import './Questions.css';

function GitHubQuestions() {
    const questions = [
        {
          questionText: "By default master branch can be set as the main branch in a repository,True or False",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
         {
          questionText: "When you use a repository’s SSH URL to push a commit to GitHub, you do not have to provide your username and password on each push. How does GitHub know that it’s you?",
          answerOptions: [
            {answerText: "Reference to parent commit objects", isCorrect: false},
            {answerText: "GitHub provides APIs with REST and GraphQL layouts.", isCorrect: false},
            {answerText: "GitHub uses the commits email address, which is set either on a local repository level, or globally across repositories on a given machine.", isCorrect: true},
          ],
        },
         {
          questionText: "The benefits of hosting an application using GitHub Pages?",
          answerOptions: [
            {answerText: "Quick and easy to set up", isCorrect: true},
            {answerText: "Various soft limitations that make it potentially unsuitable for commercial applications.", isCorrect: false},
          ],
        },
         {
          questionText: "Limitation of hosting an application using GitHub Pages?",
          answerOptions: [
            {answerText: "It’s free!", isCorrect: false},
            {answerText: "No control over caching, authorization, or any other HTTP headers", isCorrect: true},
            {answerText: "Generous (though not unlimited) limits on usage that make it great for open-source, not-for-profit, or prototype projects.", isCorrect: false},
          ],
        },
          {
          questionText: "Step you can take to ensure the security of your GitHub account?",
          answerOptions: [
            {answerText: "Ensuring the security of machines that have key pair access to your account", isCorrect: true},
            {answerText: "Make the necessary changes in the files so that conflict does not arise again", isCorrect: false},
            {answerText: "Dont get rid of unused key pairs for your account", isCorrect: false}
          ],
        },
          {
          questionText: "Git Flow is organized around releases, where there is potentially a significant amount of work in development at any given time that hasn’t been approved for production and GitHub Flow, there is no strict separation between your main branch and your development branch. This makes things like hotfixes redundant.True or False",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
          {
          questionText: "What is a feature that GitHub provides to ensure high-quality issues are submitted to your repositories?",
          answerOptions: [
            {answerText: "Git fetch is also used for the same purpose but it works in a slightly different way", isCorrect: false},
            {answerText: "Provides issue templates for repository or organization managers to lay out a specific structure that should be followed when someone submits an issue.", isCorrect: true},
            {answerText: "Make the necessary changes in the files so that conflict does not arise again.", isCorrect: false}  
          ],
        },
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
                
              <h1>Questions: GitHub</h1>
              

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

export default GitHubQuestions
