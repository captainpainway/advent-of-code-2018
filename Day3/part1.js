const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    linescan(sortCoords(mapData(removeID(arrayify(data)))));
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
        return {y1: +line[1], y2: +line[1] + +line[3], x1: +line[0], x2: +line[0] + +line[2]};
    });
}

const sortCoords = (coords) => {
    let sortLR = coords.sort((a, b) => {
        return a.x1 - b.x1;
    });
    let sorted = sortLR.sort((a, b) => {
        return a.y1 - b.y1;
    });
}

const linescan = (coords) => {

}
