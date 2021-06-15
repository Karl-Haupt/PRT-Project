import React from 'react';
import GitQuestions from '../../Components/Questions/GitQuestions';
import ExaminationSidebar from '../../Components/ExaminationSidebar/ExaminationSidebar';
import './Examination.css';

function GitExamination() {
    return (
        <div className="examination__content">
            <ExaminationSidebar />
            
            <GitQuestions />
        
        </div>
    )
}

export default GitExamination