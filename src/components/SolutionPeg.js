import React from 'react';
import { ReactComponent as StarIcon } from '../icons/StarIcon.svg';
import { ReactComponent as HexagonIcon } from '../icons/HexagonIcon.svg';
import '../styles/SolutionPeg.css';

const SolutionPeg = ({ color, shape }) => {
    const getShape = () => {
        switch (shape) {
            case 'star':
                return <StarIcon className="svg-icon" style={{ fill: color }} />;
            case 'hexagon':
                return <HexagonIcon className="svg-icon" style={{ fill: color }} />;
            case 'circle':
                return <div className={`peg-display circle`} style={{ backgroundColor: color }} />;
            case 'square':
                return <div className={`peg-display square`} style={{ backgroundColor: color }} />;
            case 'triangle':
                return <div className={`peg-display triangle`} style={{ borderBottomColor: color }} />;
            case 'rectangle':
                return <div className={`peg-display rectangle`} style={{ backgroundColor: color }} />;
            default:
                return null;
        }
    };

    return <div className="peg">{getShape()}</div>;
};

export default SolutionPeg;
