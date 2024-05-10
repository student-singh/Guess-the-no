const randomNumber=parseInt(Math.random()*10+1);
const submit=document.querySelector(".guessSubmit");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p')

let prevGuess=[]
let numGuess =1
let playGame=true;

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        console.log("button was clicked")
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a valid number greater than 1')
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`game over. Random number was $(randomNumber)`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
    }
    else if(guess <randomNumber){
        displayMessage(`No is too low`)
    }
    else{
        displayMessage(`no is too high`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}   `
    numGuess++;
    remaining.innerHTML= `${11-numGuess}`


}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}<\h2>`
        
}
function newGame(){
     const newGameButton=document.querySelector('#newGame');
     newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*10+1);
        prevGuess=[]
        numGuess=1
        gu3.innerHTML=''
        remaining.innerHTML= `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame=true;
     })


}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame()

}