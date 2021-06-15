import React from 'react';
import TestDrivenQuestions from '../../Components/Questions/TestDrivenQuestions';
import ExaminationSidebar from '../../Components/ExaminationSidebar/ExaminationSidebar';
import './Examination.css';

function TDDExamination() {
    return (
        <div className="examination__content">
            <ExaminationSidebar />

            <TestDrivenQuestions />
        
        </div>
    )
}

export default TDDExamination;
