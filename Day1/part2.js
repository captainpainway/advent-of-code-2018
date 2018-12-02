const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    const arr = data.split('\n').map(n => {
        return parseInt(n);
    });
    let freqArr = {}, total = 0, i = 0, stop = false;
    while (!stop) {
        if (i == arr.length) {
            i = 0;
        }
        if (!isNaN(arr[i])) {
            total = total + arr[i];
            if (freqArr[total] == 1) {
                stop = true;
                console.log(total);
            }
            freqArr[total] = 1;
        }
        i++;
    }
});
