import { checkGuess } from '../gameUtils';

describe('checkGuess', () => {
    it('should give correct feedback for all correct color and shape in right position', () => {
        const guess = [
            { color: 'red', shape: 'circle' },
            { color: 'green', shape: 'square' },
            { color: 'blue', shape: 'triangle' },
            { color: 'yellow', shape: 'star' },
        ];
        const secretCode = [
            { color: 'red', shape: 'circle' },
            { color: 'green', shape: 'square' },
            { color: 'blue', shape: 'triangle' },
            { color: 'yellow', shape: 'star' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual(['black', 'black', 'black', 'black']);
    });

    it('should give correct feedback for correct color and shape but wrong position', () => {
        const guess = [
            { color: 'green', shape: 'square' },
            { color: 'red', shape: 'circle' },
            { color: 'yellow', shape: 'star' },
            { color: 'blue', shape: 'triangle' },
        ];
        const secretCode = [
            { color: 'red', shape: 'circle' },
            { color: 'green', shape: 'square' },
            { color: 'blue', shape: 'triangle' },
            { color: 'yellow', shape: 'star' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual(['white', 'white', 'white', 'white']);
    });

    it('should give correct feedback for mixed correct color and shape in correct and wrong positions', () => {
        const guess = [
            { color: 'red', shape: 'circle' },
            { color: 'yellow', shape: 'star' },
            { color: 'blue', shape: 'triangle' },
            { color: 'green', shape: 'square' },
        ];
        const secretCode = [
            { color: 'red', shape: 'circle' },
            { color: 'green', shape: 'square' },
            { color: 'blue', shape: 'triangle' },
            { color: 'yellow', shape: 'star' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual(['black', 'black', 'white', 'white']);
    });

    it('should give correct feedback for correct color or shape in correct position', () => {
        const guess = [
            { color: 'purple', shape: 'circle' },
            { color: 'orange', shape: 'triangle' },
            { color: 'green', shape: 'square' },
            { color: 'red', shape: 'hexagon' },
        ];
        const secretCode = [
            { color: 'red', shape: 'circle' },
            { color: 'green', shape: 'triangle' },
            { color: 'blue', shape: 'square' },
            { color: 'yellow', shape: 'star' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual(['blue', 'blue', 'blue']);
    });

    it('should give correct feedback for second correct color or shape in correct position', () => {
        const guess = [
            { color: 'purple', shape: 'circle' },
            { color: 'purple', shape: 'triangle' },
            { color: 'green', shape: 'square' },
            { color: 'red', shape: 'square' },
        ];
        const secretCode = [
            { color: 'purple', shape: 'star' },
            { color: 'purple', shape: 'star' },
            { color: 'blue', shape: 'square' },
            { color: 'yellow', shape: 'square' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual(['blue', 'blue', 'blue', 'blue']);
    });

    it('should handle edge cases with no matches correctly', () => {
        const guess = [
            { color: 'purple', shape: 'circle' },
            { color: 'orange', shape: 'triangle' },
            { color: 'pink', shape: 'square' },
            { color: 'black', shape: 'hexagon' },
        ];
        const secretCode = [
            { color: 'red', shape: 'triangle' },
            { color: 'green', shape: 'star' },
            { color: 'blue', shape: 'rectangle' },
            { color: 'yellow', shape: 'star' },
        ];

        const feedback = checkGuess(guess, secretCode);
        expect(feedback).toEqual([]);
    });
});
