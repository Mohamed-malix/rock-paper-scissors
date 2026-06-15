


let userScore=0,computerScore=0;

function getComputerChoice(){ 
  let number;
  let computerInput;

    number= Math.floor(Math.random(number)*3);

  switch(number){
   case 0:
     computerInput='rock';
     break;
   case 1:
     computerInput='paper';
     break;
   case 2:
    computerInput='scissor';
  }
     
  return computerInput;
}





function getHumanChoice(){
  let userInput="";

  userInput=prompt("Enter what you what to play with , rock , paper or scissor !");
  userInput= userInput.toLowerCase();

  return userInput;
}



let num=prompt("How many rounds do you want to play?");

rounds(num);






function warGround(computerInput,userInput){
 

    if(userInput==='rock' && computerInput==='rock'){
      return  console.log(` both are rocks,there is no winner! . Your score is ${userScore} vs ${computerScore} for the computer!!` )
    }
    else if(userInput==='rock' && computerInput==='scissor'){

        ++userScore;
      return  console.log(`Rock vs Scissor  .You win! , your score now is ${userScore}`);
    }
    else if(userInput==='rock' && computerInput==='paper'){

        ++computerScore;
      return  console.log(`Rock vs Paper .You lose! , the computer score now is ${computerScore}`)
    }
    else if(userInput==='scissor' && computerInput==='scissor'){
        console.log(`both are scissors .there is no winner!. Your score is ${userScore}vs ${computerScore} for the computer!!`)
    }
    else if(userInput==='scissor' && computerInput==='paper'){

        ++userScore;
       return console.log(`Scissor vs Paper . You win !, your score now ${userScore}`);
    }
    else if(userInput==='scissor' && computerInput==='rock'){

       ++computerScore;
      return  console.log(`Scissor vs Rock . You lose ! , the computer score now is  ${computerScore}`);
    }
    else if(userInput==='paper' && computerInput==='paper'){
        console.log(`both are papers .there is no winner!. Your score is ${userScore}vs ${computerScore} for the computer!!`)
    }
    else if(userInput==='paper' && computerInput==='rock'){

        ++userScore;
       return console.log(`Paper vs Rock . You win !, your score now ${userScore}`);
    }
    else if(userInput==='paper' && computerInput==='scissor'){

        ++computerScore;
      return  console.log(`Paper vs Scissor . You lose ! , the computer score now is  ${computerScore}`);
    }
    else{
        return "You don't want to play!"
    }


}





function rounds(num){
  let i;

  for(i=0; i<num;i++){
console.log(warGround(getComputerChoice(),getHumanChoice()));

  }

}

