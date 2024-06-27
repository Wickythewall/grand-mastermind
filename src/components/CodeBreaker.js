import React, { useState } from 'react';
import Peg from './Peg';
import '../styles/CodeBreaker.css';

const CodeBreaker = ({ guess, onGuess }) => {
    const initialGuess = guess || new Array(4).fill({ color: '', shape: '' });
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const handlePegChange = (index, attribute, value) => {
        const newGuess = [...currentGuess];
        newGuess[index] = { ...newGuess[index], [attribute]: value };
        setCurrentGuess(newGuess);
    };

    const handleSubmit = () => {
        onGuess(currentGuess);
        setCurrentGuess(new Array(4).fill({ color: '', shape: '' }));
    };

    return (
        <div className="code-breaker">
            {currentGuess.map((peg, index) => (
                <Peg
                    key={index}
                    color={peg.color}
                    shape={peg.shape}
                    onChange={(attribute, value) => handlePegChange(index, attribute, value)}
                />
            ))}
            <button onClick={handleSubmit}>Submit Guess</button>
        </div>
    );
};

export default CodeBreaker;
