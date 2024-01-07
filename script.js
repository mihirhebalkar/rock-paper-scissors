
function getComputerChoice()
{
    const arr=["rock","paper",'scissors']
    choice=Math.floor(Math.random()*3)
    return arr[choice]
}

function playRound(playerSelection,computerSelection){

    let user_choice=prompt("Enter your choice : ")
    let computer_choice=getComputerChoice()


    if(user_choice==computer_choice){
        console.log(`Computer chose : ${computer_choice}`)
        console.log("It's a Draw")
    }

    if(user_choice.toLowerCase()=="rock")
    {
        console.log(`Computer chose : ${computer_choice}`)
        if(computer_choice=="paper"){
            console.log("You Lose")
 
        }
        if(computer_choice=="scissors"){
            console.log("You win")
 
        }
    }

    if(user_choice.toLowerCase()=="paper")
    {
        console.log(`Computer chose : ${computer_choice}`)
        if(computer_choice=="scissors"){
            console.log("You Lose")
        }
        if(computer_choice=="rock"){
            console.log("You win")
        }
    }


    if(user_choice.toLowerCase()=="scissors")
    {
        console.log(`Computer chose : ${computer_choice}`)
        if(computer_choice=="rock"){
            console.log("You Lose")
        }
        if(computer_choice=="paper"){
            console.log("You win")
        }
    }


}

function game(){
    for(let i=0;i<5;i++)
    {
        console.log(playRound())
    }
}

console.log("Game starts now")
game()
