import React, { useState } from 'react';
import Row from './Row';
import '../styles/Board.css';

const Board = ({ guesses, feedback, activeRow, onCellClick, onButtonClick }) => {
    const [openCell, setOpenCell] = useState(null);

    const handleCellClick = (rowIndex, colIndex, color, shape) => {
        onCellClick(rowIndex, colIndex, color, shape);
        setOpenCell(null);
    };

    return (
        <div className="board-container">
            <div className="board">
                {guesses.map((guess, rowIndex) => (
                    <Row
                        key={rowIndex}
                        rowIndex={rowIndex}
                        guess={guess}
                        feedback={feedback[rowIndex]}
                        activeRow={activeRow}
                        openCell={openCell}
                        setOpenCell={setOpenCell}
                        onCellClick={handleCellClick}
                        onButtonClick={onButtonClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;

