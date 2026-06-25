


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



/* We will remove this and replace it with click  */

// function getHumanChoice(){
//   let userInput="";

//   userInput=prompt("Enter what you what to play with , rock , paper or scissor !");
//   userInput= userInput.toLowerCase();

//   return userInput;
// }



// let num=prompt("How many rounds do you want to play?");

// rounds(num);







function warGround(computerInput,userInput){
 

    if(userInput==='rock' && computerInput==='rock'){
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}` ,
        document.querySelector('#text').textContent= ` both are rocks,there is no winner! . Your score is ${userScore} vs ${computerScore} for the computer!!` ;
    }
    else if(userInput==='rock' && computerInput==='scissor'){

        ++userScore;
       return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`Rock vs Scissor  .You win! , your score now is ${userScore}`;
    }
    else if(userInput==='rock' && computerInput==='paper'){

        ++computerScore;
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`Rock vs Paper .You lose! , the computer score now is ${computerScore}`;
    }
    else if(userInput==='scissor' && computerInput==='scissor'){
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`;
        document.querySelector('#text').textContent=`both are scissors .there is no winner!. Your score is ${userScore}vs ${computerScore} for the computer!!`;
    }
    else if(userInput==='scissor' && computerInput==='paper'){

        ++userScore;
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`Scissor vs Paper . You win !, your score now ${userScore}`;
    }
    else if(userInput==='scissor' && computerInput==='rock'){

       ++computerScore;
       return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
       document.querySelector('#text').textContent=`Scissor vs Rock . You lose ! , the computer score now is  ${computerScore}`;
    }
    else if(userInput==='paper' && computerInput==='paper'){
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`both are papers .there is no winner!. Your score is ${userScore}vs ${computerScore} for the computer!!`;
    }
    else if(userInput==='paper' && computerInput==='rock'){

        ++userScore;
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`Paper vs Rock . You win !, your score now ${userScore}`;
    }
    else if(userInput==='paper' && computerInput==='scissor'){

        ++computerScore;
        return document.querySelector('#human').textContent=`Score: ${userScore} vs ${computerScore}`,
        document.querySelector('#text').textContent=`Paper vs Scissor . You lose ! , the computer score now is  ${computerScore}`;
    }
    else{
        return "You don't want to play!";
    }


}











let userInput='';


const rock=document.querySelector('.rock');
rock.addEventListener('click', () => {

  userInput='rock';

  warGround(getComputerChoice(),userInput)
})

const paper=document.querySelector('.paper');
paper.addEventListener('click', () => {

  userInput='paper';

  warGround(getComputerChoice(),userInput)
})

const scissor=document.querySelector('.scissor');
scissor.addEventListener('click', () => {

  userInput='scissor';

  warGround(getComputerChoice(),userInput)
})






const btn=document.querySelector('#reset');

btn.addEventListener('click',() =>{
   location.reload();
})