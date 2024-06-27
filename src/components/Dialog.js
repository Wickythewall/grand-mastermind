import React from 'react';
import '../styles/Dialog.css';

const Dialog = ({ gameResult, points, onClose }) => (
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
                </>
            )}
            <button onClick={onClose}>Start new Game!</button>
        </div>
    </div>
);

export default Dialog;
