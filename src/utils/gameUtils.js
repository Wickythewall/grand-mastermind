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
                feedback.push('white');
                codeCopy[colorIndex] = { color: null, shape: null };
                guessCopy[index] = { color: null, shape: null };
            }
        }
    });

    // Third pass: check for correct color or shape in wrong position
    guessCopy.forEach((peg, index) => {
        if (peg.color && peg.shape) {
            if (codeCopy[index].color === peg.color || codeCopy[index].shape === peg.shape) {
                feedback.push('blue');
                if (codeCopy[index].color === peg.color) {
                    codeCopy[index] = { color: null, shape: null };
                }
                if (codeCopy[index].shape === peg.shape) {
                    codeCopy[index] = { color: null, shape: null };
                }
                guessCopy[index] = { color: null, shape: null }; // Nullify the guess peg
            }
        }
    });

    console.log('Feedback:', feedback);
    return feedback;
};
