const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    countOverlaps(clothArray(sortCoords(mapData(arrayify(data)))));
});

const arrayify = (data) => {
    const arr = data.split('\n');
    arr.pop();
    return arr;
}

const mapData = (data) => {
    return data.map(l => {
        let line = l.split(/:\s|[,x@]/);
        return {id: line[0].substring(1), y1: +line[2], y2: +line[2] + +line[4] - 1, x1: +line[1], x2: +line[1] + +line[3] - 1};
    });
}

const sortCoords = (coords) => {
    let sortLR = coords.sort((a, b) => {
        return a.x1 - b.x1;
    });
    return sortLR.sort((a, b) => {
        return a.y1 - b.y1;
    });
}

const clothArray = (coords) => {
    let clothSize = 1000;
    let clothArr = [];
    let overlaps = {};
    for (let i = 1; i <= clothSize; i++) { // Rows
        let clothRow = Array(clothSize).fill('');
        for (let j = 1; j <= clothSize; j++) { // Columns
            coords.forEach(c => {
                if (c.y1 <= i && c.y2 >= i) {
                    if (c.x1 <= j && c.x2 >= j) {
                        if (clothRow[j] === '') {
                            clothRow[j] = c.id;
                        } else {
                            overlaps[c.id] = 1;
                            if (clothRow[j] !== 'X') {
                                overlaps[clothRow[j]] = 1;
                            }
                            clothRow[j] = 'X';
                        }
                    }
                }
            });
        }
        clothArr.push(clothRow);
    }
    return overlaps;
}

const countOverlaps = (overlaps) => {
    let sortedArr = Object.keys(overlaps).sort((a, b) => a - b);
    let i = 1;
    for (let a of sortedArr) {
        if (a == i) {
            i++;
        } else {
            console.log(i);
            break;
        }
    }
}
