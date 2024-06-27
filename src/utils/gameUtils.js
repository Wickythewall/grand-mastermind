export const generateSecretCode = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const shapes = ['circle', 'square', 'triangle', 'hexagon', 'rectangle', 'star'];
    const code = [];
    for (let i = 0; i < 4; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        code.push({ color: randomColor, shape: randomShape });
    }
    console.log('Code:', code);
    return code;
};

export const checkGuess = (guess, secretCode) => {
    const feedback = [];
    const codeCopy = secretCode.map(peg => ({ ...peg }));
    const guessCopy = guess.map(peg => ({ ...peg }));

    // First pass: check for correct color and shape in right position
    guessCopy.forEach((peg, index) => {
        if (peg.color === codeCopy[index].color && peg.shape === codeCopy[index].shape) {
            console.log('Color: ', peg.color, ' Shape: ', peg.shape);
            feedback.push('black');
            codeCopy[index] = { color: null, shape: null };
            guessCopy[index] = { color: null, shape: null };
        }
    });

    // Second pass: check for correct color and shape but wrong position
    guessCopy.forEach((peg, index) => {
        if (peg.color && peg.shape) {
            const colorIndex = codeCopy.findIndex(codePeg => codePeg.color === peg.color && codePeg.shape === peg.shape);
            if (colorIndex > -1) {
                console.log('Color: ', peg.color, ' Shape: ', peg.shape);
                feedback.push('white');
                codeCopy[colorIndex] = { color: null, shape: null };
                guessCopy[index] = { color: null, shape: null }; // Add this line to nullify the guess peg
            }
        }
    });

    // Third pass: check for correct color or shape in wrong position
    guessCopy.forEach((peg, index) => {
        if (peg.color && peg.shape) { // Ensure the peg hasn't been nullified already
            const colorIndex = codeCopy.findIndex(codePeg => codePeg.color === peg.color);
            const shapeIndex = codeCopy.findIndex(codePeg => codePeg.shape === peg.shape);
            if (colorIndex == index || shapeIndex == index) {
                feedback.push('blue');
                if (colorIndex > -1) {
                    console.log('Color: ', peg.color, 'index: ', index);
                    codeCopy[colorIndex] = { color: null, shape: null };
                }
                if (shapeIndex > -1) {
                    console.log('Shape: ', peg.shape, 'index: ', index);
                    codeCopy[shapeIndex] = { color: null, shape: null };
                }
                guessCopy[index] = { color: null, shape: null }; // Nullify the guess peg
            }
        }
    });

    console.log('Feedback:', feedback);
    return feedback;
};
