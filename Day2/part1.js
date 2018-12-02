const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    const arr = data.split('\n');
    let two = 0, three = 0;
    for (let id of arr) {
        two += twos(id);
        three += threes(id);
    }
    console.log(two * three);
});

const counts = (id) => {
    let obj = {};
    id.split('').forEach(l => {
        obj[l] ? obj[l]++ : obj[l] = 1;
    });
    return obj;
};

const twos = (id) => {
    let obj = counts(id);
    let found = 0;
    for (let value of Object.values(obj)) {
        if (value === 2) {
            found = 1;
        }
    }
    return found;
};

const threes = (id) => {
    let obj = counts(id);
    let found = 0;
    for (let value of Object.values(obj)) {
        if (value === 3) {
            found = 1;
        }
    }
    return found;
};
