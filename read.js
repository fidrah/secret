'use strict';

const fs = require('fs');

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

let rawdata = fs.readFileSync('./test/file-0.json');
let results = JSON.parse(rawdata);
console.log(results[10]);
console.log(Object.keys(results).length);


for (let index = 0; index < Object.keys(results).length; index++) {
    const element = results[index];
    
    
    if( element.equals([ 22, 21, 0, 26, 6 ])){
        console.log('hola bebe');    
        console.log(results[index]);
        return element;
    }
    //console.log(element)
    
}