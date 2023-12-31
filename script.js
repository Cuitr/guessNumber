'use strict';
/*
document.querySelector(`.message`) .textContent = `Correct Number!`;
document.querySelector(`.number`).textContent = 19;
document.querySelector(`.score`).textContent = 90;
console.log(document.querySelector(`.guess`).value);
*/

let number = Math.floor(Math.random()*20);
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector(`.message`).textContent = message;
}
const displayNumber = function(number){
    document.querySelector(`.number`).textContent = number;
}
const displayHighScore = function(highScore){
    document.querySelector(`.highscore`).textContent = highScore;
}
const displayScore = function(score){
    document.querySelector(`.score`).textContent = score;
}
document.querySelector(`.check`).addEventListener(`click`, function(){
    const guess = Number(document.querySelector(`.guess`).value);
    if(!guess){
        //document.querySelector(`.message`).textContent = `Please insert a number!`;
        displayMessage(`Please insert a number!`);
    }else if(guess === number){
        if(score > highScore){
        //document.querySelector(`.message`).textContent = `Correct Number!👌💓💓`;
        displayMessage(`Correct Number!👌💓💓`);
        //document.querySelector(`.number`).textContent = number;
        displayNumber(number);
        //document.querySelector(`.highscore`).textContent = score;
        displayHighScore(score);
        }
    }else if(guess !== number){
        if(score > 0){
            //document.querySelector(`.message`).textContent = guess > number ? `Too high 😬` : `Too low 😆`;
            displayMessage(guess > number ? `Too high 😬` : `Too low 😆`);
            score--;
            //document.querySelector(`.score`).textContent = score;
            displayScore(score);
        }else{
            //document.querySelector(`.message`).textContent = `Out of guess, gameover!😒`;
            displayMessage(`Out of guess, gameover!😒`);
        }
    }
    /* 
    else if(guess > number){
        if(score > 0){
        document.querySelector(`.message`).textContent = `Too high 😬`;
        score--;
        document.querySelector(`.score`).textContent = score;
        }else{
            document.querySelector(`.message`).textContent = `Out of guess, gameover!😒`;
        }
    }else{
        if(score > 0){
        document.querySelector(`.message`).textContent = `Too low 😆`;
        score--;
        document.querySelector(`.score`).textContent = score;
        }else{
            document.querySelector(`.message`).textContent = `Out of guess, gameover!😒`;
        }
    }
    */
});

document.querySelector(`.again`).addEventListener(`click`, function(){
     score = 20;
     number = Math.floor(Math.random()*20);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;
    
});
