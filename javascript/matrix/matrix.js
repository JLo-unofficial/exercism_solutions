export class Matrix {
    constructor(matrixString) {
        this._matrix = matrixString.split("\n").map(row => row.split(" "));
    }

    get rows(idx) {
        return this._matrix[idx];
    }

    get columns(idx) {
        throw new Error('Remove this statement and implement this function');
    }
}
