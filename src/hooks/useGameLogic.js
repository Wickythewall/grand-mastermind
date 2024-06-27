import { useState } from 'react';
import { generateSecretCode, checkGuess } from '../utils/gameUtils';

const useGameLogic = () => {
    const [secretCode, setSecretCode] = useState(() => generateSecretCode());
    const [guesses, setGuesses] = useState(new Array(10).fill(null).map(() => new Array(4).fill({ color: '', shape: '' })));
    const [feedback, setFeedback] = useState(new Array(10).fill([]));
    const [activeRow, setActiveRow] = useState(9);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [points, setPoints] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameResult, setGameResult] = useState(null); // "win" or "lose"

    const handleCellClick = (rowIndex, colIndex, color, shape) => {
        const newGuesses = guesses.map((row, rIdx) =>
            row.map((cell, cIdx) =>
                rIdx === rowIndex && cIdx === colIndex
                    ? { color, shape }
                    : cell
            )
        );
        setGuesses(newGuesses);
    };

    const makeGuess = (guess) => {
        const result = checkGuess(guess, secretCode);
        const newFeedback = feedback.map((fb, index) =>
            index === activeRow ? result : fb
        );
        setFeedback(newFeedback);

        if (result.filter(item => item === 'black').length === 4) {
            setWins(wins + 1);
            setPoints(points + (activeRow + 1)); // Points for remaining rows
            setGameResult("win");
            setGameOver(true);
        } else if (activeRow === 0) {
            setLosses(losses + 1);
            setGameResult("lose");
            setGameOver(true);
        } else {
            setActiveRow(activeRow - 1); // Move to the next row up
        }
    };

    const resetGame = () => {
        setSecretCode(generateSecretCode());
        setGuesses(new Array(10).fill(null).map(() => new Array(4).fill({ color: '', shape: '' })));
        setFeedback(new Array(10).fill([]));
        setActiveRow(9);
        setGameOver(false);
        setGameResult(null);
    };

    return {
        secretCode,
        guesses,
        feedback,
        activeRow,
        wins,
        losses,
        points,
        gameOver,
        gameResult,
        handleCellClick,
        makeGuess,
        resetGame
    };
};

export default useGameLogic;
