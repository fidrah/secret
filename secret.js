'use strict';

const fs = require('fs');

let balls = [];
let results = {};
let file = '';



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
        selectedBall = selectBall();
        secret.push(selectedBall);
        balls.splice(balls.indexOf(selectedBall), 1);
        
    }

    return secret;
}



function resultJson() {
    let result;
    //4496388
    for (let index = 0; index < 4496388; index++) {
        result = getResult();
        results[index] = result;
    }
}




    resultJson();
    let data1 = JSON.stringify(results);
    file = './test/file-2.json';
    fs.writeFileSync(file, data1);
    


/*

  for (let index = 0; index < Object.keys(test).length; index++) {
    const element = test[index];
    console.log(element);
    
    if( element.equals([ 6, 40, 16, 5, 13 ])){
        console.log('hola bebe');    
    }
    //console.log(element)
    
}*/
