const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    const arr = data.split('\n');
    arr.pop();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let numDiffs = diffs(arr[i], arr[j]);
            if (numDiffs === 1) {
                console.log(samesies(arr[i], arr[j]));
            }
        }
    }
});

const diffs = (a, b) => {
    let numDiffs = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            numDiffs++;
        }
    }
    return numDiffs;
};

const samesies = (a, b) => {
    let sameLetters = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            sameLetters.push(a[i]);
        }
    };
    return sameLetters.join('');
};