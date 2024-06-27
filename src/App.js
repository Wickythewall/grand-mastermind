import React from 'react';
import Board from './components/Board';
import Dialog from './components/Dialog';
import useGameLogic from './hooks/useGameLogic';
import './styles/App.css';

const App = () => {
    const {
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
    } = useGameLogic();

    return (
        <div className="App">
            <h1>Grand Mastermind</h1>
            <div className="counters">
                <p>Wins: {wins} Losses: {losses} Points: {points}</p>
            </div>
            <Board
                guesses={guesses}
                feedback={feedback}
                activeRow={activeRow}
                onCellClick={handleCellClick}
                onButtonClick={() => makeGuess(guesses[activeRow])}
            />
            {gameOver && (
                <Dialog
                    gameResult={gameResult}
                    points={points}
                    onClose={resetGame}
                />
            )}
        </div>
    );
};

export default App;
