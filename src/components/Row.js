import React from 'react';
import Cell from './Cell';
import Feedback from './Feedback';
import '../styles/Row.css';

const Row = ({ rowIndex, guess, feedback, activeRow, openCell, setOpenCell, onCellClick, onButtonClick }) => {
    const isRowFilled = guess.every(cell => cell.color && cell.shape);

    return (
        <div className={`row ${rowIndex === activeRow ? 'active-row' : ''}`}>
            <Feedback feedback={feedback} />
            {guess.map((cell, colIndex) => (
                <Cell
                    key={colIndex}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    color={cell.color}
                    shape={cell.shape}
                    isActive={rowIndex === activeRow}
                    openCell={openCell}
                    setOpenCell={setOpenCell}
                    onClick={onCellClick}
                />
            ))}
            {rowIndex === activeRow && isRowFilled ? (
                <button onClick={onButtonClick} className='submit-button'>
                    ?
                </button>
            ) : (
                <div className='submit-button-placeholder' />
            )}
        </div>
    );
};

export default Row;
