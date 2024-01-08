function getComputerChoice()
{
    const arr=["rock","paper",'scissors']
    choice=Math.floor(Math.random()*3)
    return arr[choice]
}

function playRound(userChoice){
    let computerChoice=getComputerChoice();

    if(userChoice==computerChoice){
        alert("Draw")
    }

    if(userChoice=="rock"){
        if(computerChoice=="scissors"){
            alert("You win")
        }
        if(computerChoice=="paper"){
            alert("You lose")
        }
    }

    if(userChoice=="paper"){
        if(computerChoice=="rock"){
            alert("You win")
        }
        if(computerChoice=="scissors"){
            alert("You lose")
        }
    }
    
    if(userChoice=="scissors"){
        if(computerChoice=="paper"){
            alert("You win")
        }
        if(computerChoice=="rock"){
            alert("You lose")
        }
    }
}


const buttons=document.querySelectorAll('button');

//event listener
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
    const userChoice=button.id;
    playRound(userChoice)    
    });
});
