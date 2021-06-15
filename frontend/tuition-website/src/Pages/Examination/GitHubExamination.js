import React from 'react';
import GitHubQuestions from '../../Components/Questions/GitHubQuestions';
import ExaminationSidebar from '../../Components/ExaminationSidebar/ExaminationSidebar';
import './Examination.css';

function GitHubExamination() {
    return (
        <div className="examination__content">
            <ExaminationSidebar />
            
            <GitHubQuestions />
        
        </div>
    )
}

export default GitHubExamination;