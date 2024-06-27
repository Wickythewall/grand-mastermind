import React, { useState, useEffect } from 'react';
import '../styles/SelectionMenu.css';
import { ReactComponent as StarIcon } from '../icons/StarIcon.svg';
import { ReactComponent as HexagonIcon } from '../icons/HexagonIcon.svg';

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
const shapes = ['circle', 'square', 'triangle', 'hexagon', 'rectangle', 'star'];
const shapesCss = ['circle', 'square', 'triangle', 'rectangle'];
const shapesSvg = ['hexagon', 'star'];


const SelectionMenu = ({ onSelect }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedShape, setSelectedShape] = useState('');

    useEffect(() => {
        if (selectedColor && selectedShape) {
            onSelect(selectedColor, selectedShape);
        }
    }, [selectedColor, selectedShape, onSelect]);

    const handleColorSelect = (color) => setSelectedColor(color);
    const handleShapeSelect = (shape) => setSelectedShape(shape);

    return (
        <div className="selection-menu">
            <div className="color-options">
                {colors.map((color) => (
                    <div
                        key={color}
                        className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                        onClick={() => handleColorSelect(color)}
                    />
                ))}
            </div>
            <div className="shape-options">
                {shapesCss.map((shape) => (
                    <div
                        key={shape}
                        className={`shape-option ${shape} ${selectedShape === shape ? 'selected' : ''}`}
                        onClick={() => handleShapeSelect(shape)}
                    >
                        {shape !== 'star' && shape !== 'hexagon' && (
                            <div className={`shape-icon ${shape}`} style={{ backgroundColor: 'grey' }} />
                        )}
                    </div>
                ))}
                {shapesSvg.map((shape) => (
                    <div
                        key={shape}
                        className={`shape-option ${shape} ${selectedShape === shape ? 'selected' : ''}`}
                        onClick={() => handleShapeSelect(shape)}
                    >
                        {shape === 'star' && <StarIcon className="svg-icon" style={{ fill: 'grey' }} />}
                        {shape === 'hexagon' && <HexagonIcon className="svg-icon" style={{ fill: 'grey' }} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectionMenu;
