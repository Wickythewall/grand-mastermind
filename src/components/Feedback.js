import React from 'react';
import '../styles/Feedback.css';

const Feedback = ({ feedback }) => (
    <div className="feedback">
        {feedback.map((item, index) => (
            <div key={index} className={`feedback-peg ${item}`} />
        ))}
    </div>
);

export default Feedback;
