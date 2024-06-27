import React from 'react';
import Peg from './Peg';
import '../styles/CodeMaker.css';

const CodeMaker = ({ secretCode }) => (
    <div className="code-maker">
        {secretCode.map((color, index) => (
            <Peg key={index} color={color} />
        ))}
    </div>
);

export default CodeMaker;
