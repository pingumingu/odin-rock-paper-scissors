/**
 * Decides on rock(1) paper(2) or scissors(3)
 * @returns {integer} either 1, 2 or 3
 */
function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random()*3);
    return randomNumber;
}

function convertSelectionToNumeric(playerSelectionString) {
    playerSelectionString = playerSelectionString.toLowerCase();
    
    switch (playerSelectionString) {
        case "rock":
            return 1;
        
        case "paper":
            return 2;
            
        case "scissors":
            return 3;
        
        default:
            console.log("Please enter either rock, paper, or scissors")
        
    }
}

function paperScissorsRock(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelectionNumeric = convertSelectionToNumeric(playerSelection);
    console.log(playerSelectionNumeric);
    console.log(computerSelection);

    if (playerSelectionNumeric == computerSelection) {
        return [0,0,`It's a draw! Both you and the opponent played ${playerSelection}.`];
    } else if (playerSelectionNumeric == 1 && computerSelection == 2) {
        return [0,1,"You lose! Paper beats rock."];
    } else if (playerSelectionNumeric == 1 && computerSelection == 3) {
        return [1,0,"You win! Rock beats scissors."];
    } else if (playerSelectionNumeric == 2 && computerSelection == 1) {
        return [1,0,"You win! Paper beats rock."];
    } else if (playerSelectionNumeric == 2 && computerSelection == 3) {
        return [0,1,"You lose! Scissors beats paper."];
    } else if (playerSelectionNumeric == 3 && computerSelection == 1) {
        return [0,1,"You lose! Rock beats scissors."];
    } else {
        return [1,0,"You win! Scissors beats paper."]
    }
    
}

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        selection = prompt("Play paper, scissors or rock?")
        currentGame = paperScissorsRock(selection, getComputerChoice())
        console.log(currentGame[2])
        playerScore += currentGame[0]
        computerScore += currentGame[1]
        console.log(`The score is ${playerScore}-${computerScore}.`)
    }

    if (playerScore > computerScore) {
        console.log(`The final score is ${playerScore}-${computerScore}. You win!`);
    } else if (playerScore == computerScore) {
        console.log(`The final score is ${playerScore}-${computerScore}. It's a draw!`)
    } else {
        console.log(`The final score is ${playerScore}-${computerScore}. You lose!`)
    }

}

const buttonContainer = document.querySelector('.button-container');
const resultsContainer = document.querySelector('.results')

let playerScore = 0;
let computerScore = 0;
let gameCount = 0

for (rps of ['rock','paper','scissors']) {
    let rpsButton = document.createElement('button');
    rpsButton.classList.add(rps);
    rpsButton.textContent = rps;
    buttonContainer.appendChild(rpsButton);

    //use an IIFE (Immediately Invoked Function Expression) to add an event listener to each button. This
    //ensures that each event listener callback function has its own scope so it doesn't reference the rps from the outer scope.
    rpsButton.addEventListener('click', (function(rps) {
        return function() {
            let resultsDiv = document.createElement('div');
            let result = paperScissorsRock(rps,getComputerChoice());

            playerScore += result[0];
            computerScore += result[1];
            gameCount += 1;

            if (gameCount == 5 || playerScore == 3 || computerScore == 3) {
                while (buttonContainer.firstChild) {
                    buttonContainer.removeChild(buttonContainer.firstChild);   
                }
                if (playerScore > computerScore) {
                    resultsDiv.textContent =result[2]+'\n You won the best of five!'+`The score was ${playerScore} - ${computerScore}.`;
                }
                else {
                    resultsDiv.textContent =result[2]+'\n You lost the best of five!'+`The score was ${playerScore} - ${computerScore}.`;
                }  
            } else {
                resultsDiv.textContent = result[2];
            }

            resultsContainer.appendChild(resultsDiv);

        };
    })(rps));
}
