'use strict';

const fs = require('fs');

let balls = [];
let results = {};
let file = '';
const storedFile = '/home/hardif/Desktop/secret/file-counter.json'
let countNumber;
let goodLuck = [ 34, 38, 6, 31, 25]

// shuffle balls like lotery 5 times

function shuffle(array) {
    for (let index = 1; index <= 5; index++) {
        array.sort(() => Math.random() - 0.5);
    }
}

//Select the ball 
function selectBall() {
    let ball;
     // Shuffle balls 5 times 
    shuffle(balls);
    //Select random ball 
    ball  = balls[Math.floor(Math.random() * balls.length)];
    //Return selected ball
    return ball;
}

function getResult() {
    let secret = [];
    let selectedBall;
    //balls
    balls = [
        0, 1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40
      ];
    for (let index = 1; index <= 5; index++) {
        selectedBall = selectBall(); //Select one
        secret.push(selectedBall);// add it to an array
        balls.splice(balls.indexOf(selectedBall), 1);//remove it from the array of balls
        
    }

    return secret;
}



function resultJson() {
    let result;
    //4496388
    fileNumber();
    for (let index = 0; index < 4496388; index++) {
        result = getResult();
        results[index] = result;
        if(JSON.stringify(result) === JSON.stringify(goodLuck)){
            let objBingo = {
                objIndex: index
            }
            
            let bingo = JSON.stringify(objBingo,null,1);
            let bingoFile = '/home/hardif/Desktop/secret/bingo/file-'+ countNumber +'.json';
            fs.writeFileSync(bingoFile, bingo);
        }
    }
    
    
    jsonFileName();

}


function jsonFileName() {

    let strResults = JSON.stringify(results,null,1);
    let newfile = '/home/hardif/Desktop/secret/results/file-'+ countNumber +'.json';

    fs.writeFileSync(newfile, strResults);
}


function fileNumber() {
    let getFileNumber = fs.readFileSync(storedFile);
    let fileObj = JSON.parse(getFileNumber);
    countNumber = Object.keys(fileObj).length;
    fileObj[countNumber] = countNumber;
    let newData = JSON.stringify(fileObj, null, 1);
    fs.writeFileSync(storedFile, newData);


}
resultJson();
    
    


/*

  for (let index = 0; index < Object.keys(test).length; index++) {
    const element = test[index];
    console.log(element);
    
    if( element.equals([ 6, 40, 16, 5, 13 ])){
        console.log('hola bebe');    
    }
    //console.log(element)
    
}*/
