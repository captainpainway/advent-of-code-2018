const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    const arr = data.split('\n').map(n => {
        return parseInt(n);
    }).reduce((acc, n) => {
        return isNaN(n) ? acc : acc + n;
    }, 0);
    console.log(arr);
});
