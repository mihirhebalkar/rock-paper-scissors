let userScore=0;
let computerScore=0;


function getComputerChoice()
{
    const arr=["rock","paper",'scissors']
    choice=Math.floor(Math.random()*3)
    return arr[choice]
}

function playRound(userChoice){
    let computerChoice=getComputerChoice();

    if(userChoice==computerChoice){
        alert(`Computer chose : ${computerChoice.toUpperCase()}`);
        draw();
    }

    if(userChoice=="rock"){
        
        if(computerChoice=="scissors"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);  
            win();
        }
        if(computerChoice=="paper"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);
            loss();
        }
    }

    if(userChoice=="paper"){
        
        if(computerChoice=="rock"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);
            win();
        }
        if(computerChoice=="scissors"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);
            loss();
        }
    }
    
    if(userChoice=="scissors"){
        
        if(computerChoice=="paper"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);
            win();
        }
        if(computerChoice=="rock"){
            alert(`Computer chose : ${computerChoice.toUpperCase()}`);
            loss();
        }
    }
}
const result=document.querySelector(".result");
const compscore=document.querySelector(".computer .numeric");
const uscore=document.querySelector(".user .numeric");

function loss(){
    computerScore++;
    result.innerHTML="<p>You lost the last round</p>";
    compscore.innerHTML=`<p>${computerScore}</p>`;
    uscore.innerHTML=`<p>${userScore}</p>`;

}

function win(){
    userScore++;
    result.innerHTML="<p>You won the last round</p>";
    compscore.innerHTML=`<p>${computerScore}</p>`;
    uscore.innerHTML=`<p>${userScore}</p>`;
}


function draw(){
    result.innerHTML="<p>Round drawn</p>";
    compscore.innerHTML=`<p>${computerScore}</p>`;
    uscore.innerHTML=`<p>${userScore}</p>`;

}

const buttons=document.querySelectorAll('button');


//event listener+game 

function game() {    
    function checkGameEnd() {
        if (userScore === 5 || computerScore === 5) {
            (userScore > computerScore)?alert("Get a life! Congrats"):alert("Hahaha... Lost to a computer!");
            result.innerHTML="<p>Start New Game</p>"
            computerScore=0;
            userScore=0;
        }
    }
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            playRound(userChoice);
            checkGameEnd();
        });
    });
}

game()