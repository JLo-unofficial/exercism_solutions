const colorValues = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
}

// use destructuring to make it clearer that only two colors are required
export const decodedValue = ([firstColor, secondColor]) => colorValues[firstColor] * 10 + colorValues[secondColor];
