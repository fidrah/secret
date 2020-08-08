'use strict';

const fs = require('fs');

fs.readFile('/home/hardif/Desktop/secret/file-counter.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    var test = Object.keys(student).length
    student[test] = test;
    console.log(student);

    let data1 = JSON.stringify(student, null, 1);
    var file = '/home/hardif/Desktop/secret/bingo/file-'+test+'.json';
    //ar file = 'data.json'
    fs.writeFileSync(file, data1);
});



