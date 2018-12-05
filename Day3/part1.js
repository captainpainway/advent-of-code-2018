const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    countOverlaps(clothArray(sortCoords(mapData(removeID(arrayify(data))))));
});

const arrayify = (data) => {
    const arr = data.split('\n');
    arr.pop();
    return arr;
}

const removeID = (data) => {
    return data.map(l => {
        return l.split('@')[1].trim();
    });
}

const mapData = (data) => {
    return data.map(l => {
        let line = l.split(/:\s|[,x]/);
        return {y1: +line[1], y2: +line[1] + +line[3] - 1, x1: +line[0], x2: +line[0] + +line[2] - 1};
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
    for (let i = 1; i <= clothSize; i++) { // Rows
        let clothRow = Array(clothSize).fill('');
        for (let j = 1; j <= clothSize; j++) { // Columns
            coords.forEach(c => {
                if (c.y1 <= i && c.y2 >= i) {
                    if (c.x1 <= j && c.x2 >= j) {
                        if (clothRow[j] === '') {
                            clothRow[j] = 1;
                        } else {
                            clothRow[j] = 'X';
                        }
                    }
                }
            });
        }
        clothArr.push(clothRow);
    }
    return clothArr;
}

const countOverlaps = (cloth) => {
    let count = 0;
    cloth.forEach(r => {
        r.forEach(c => {
            if (c === 'X') {
                count++;
            }
        })
    });
    console.log(count);
}
