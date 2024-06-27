import React, { useRef, useEffect } from 'react';
import SelectionMenu from './SelectionMenu';
import '../styles/Cell.css';
import Peg from './Peg';

const Cell = ({ rowIndex, colIndex, color, shape, isActive, openCell, setOpenCell, onClick }) => {
    const menuRef = useRef(null);

    const isOpen = openCell && openCell.rowIndex === rowIndex && openCell.colIndex === colIndex;

    const handleSelect = (selectedColor, selectedShape) => {
        onClick(rowIndex, colIndex, selectedColor, selectedShape);
        setOpenCell(null);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenCell(null);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div
            className={`cell ${isActive ? 'active-cell' : ''}`}
            onClick={() => setOpenCell({ rowIndex, colIndex })}
        >
            <Peg color={color} shape={shape} />
            {isOpen && (
                <div className="menu-overlay" ref={menuRef} onClick={(e) => e.stopPropagation()}>
                    <SelectionMenu onSelect={handleSelect} />
                </div>
            )}
        </div>
    );
};

export default Cell;

