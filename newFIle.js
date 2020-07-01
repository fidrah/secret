'use strict';

const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 let file
let data = JSON.stringify(student);
for (let index = 0; index < 5; index++) {
    
    file = './test/file-' + index +'.json';
    fs.writeFileSync(file, data);
    
}
