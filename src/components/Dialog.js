import React from 'react';
import '../styles/Dialog.css';
import SolutionPeg from './Peg';

const Dialog = ({ gameResult, points, secretCode, onClose }) => (
    <div className="dialog-overlay">
        <div className="dialog">
            {gameResult === "win" ? (
                <>
                    <h2>Congratulations, you won!</h2>
                    <p>You earned {points} points!</p>
                </>
            ) : (
                <>
                    <h2>Game Over</h2>
                    <p>You lost. Better luck next time!</p>
                    <div className="solution">
                        <h3>The correct combination was:</h3>
                        <div className="solution-pegs">
                            {secretCode.map((peg, index) => (
                                <SolutionPeg key={index} color={peg.color} shape={peg.shape} />
                            ))}
                        </div>
                    </div>
                </>
            )}
            <button onClick={onClose}>Restart Game</button>
        </div>
    </div>
);

export default Dialog;
