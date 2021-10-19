import React, { useState } from 'react';
import './Questions.css';

function GitQuestions() {
    const questions = [
        {
          questionText: "GIT is a distributed version control system and source code management (SCM) system with an emphasis to handle small and large projects with speed and efficiency.",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
         {
          questionText: "A repository contains a directory named .git, where git keeps all of its metadata for the repository. The content of the .git directory are private to git.",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
         {
          questionText: "The command that is used to write a commit message is “git commit –a”.  The –a on the command line instructs git to commit the new content of all tracked files that have been modified. You can use “git add<file>” before git commit –a if new files need to be committed for the first time",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
         {
          questionText: "What are the advantage of using GIT?",
          answerOptions: [
            {answerText: "They have poor GUI and usability", isCorrect: false},
            {answerText: "It lacks window support and doesn't track empty folders", isCorrect: false},
            {answerText: "Any sort of projects can use GIT", isCorrect: true},
          ],
        },
          {
          questionText: "What is the function of git clone?",
          answerOptions: [
            {answerText: "Reference to parent commit objects", isCorrect: false},
            {answerText: "The git clone command creates a copy of an existing Git repository.To get the copy of a central repository, cloning  is the most common way used by programmers.", isCorrect: true},
            {answerText: "An SHAI name, a 40 character string that uniquely identifies the commit object.", isCorrect: false}
          ],
        },
          {
          questionText: "Git uses C language. GIT is fast, and C language makes this possible by reducing the overhead of run times associated with high-level languages.",
          answerOptions: [
            {answerText: "True", isCorrect: true},
            {answerText: "False", isCorrect: false},
          ],
        },
          {
          questionText: "What is a repository in Git?",
          answerOptions: [
            {answerText: "They have poor GUI and usabilityue", isCorrect: false},
            {answerText: "Repository in Git is a place where Git stores all the files. Git can store the files either on the local repository or on the remote repository.", isCorrect: true},
            {answerText: "Any sort of projects can use GIT", isCorrect: false}  
        ],
        },
          {
          questionText: "How can you create a repository in Git?",
          answerOptions: [
            {answerText: "Make the necessary changes in the files so that conflict does not arise again.", isCorrect: false},
            {answerText: "It lacks window support and doesn't track empty folders", isCorrect: true},
            {answerText: "2To create a repository, create a directory for the project if it does not exist, then run the command git init. By running this command .git directory will be created in the project directory.", isCorrect: false},
          ],
        },
          {
          questionText: "How does a git pull work?",
          answerOptions: [
            {answerText: "Git pull command pulls new changes or commits from a particular branch from your central repository and updates your target branch in your local repository.", isCorrect: true},
            {answerText: "It lacks window support and doesn't track empty folders", isCorrect: false},
            {answerText: "Git fetch is also used for the same purpose but it works in a slightly different way. When you perform a git fetch", isCorrect: false},
          ],
        },
         {
            questionText: "How will you know in Git if a branch has already been merged into master?",
            answerOptions: [
              {answerText: "It lists the branches that have not been merged.", isCorrect: false},
              {answerText: "Git fetch is also used for the same purpose but it works in a slightly different way. When you perform a git fetch", isCorrect: false},
              {answerText: "It lists the branches that have been merged into the current branch", isCorrect: true}
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
                
              <h1>Questions: Git</h1>
              

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

export default GitQuestions;
