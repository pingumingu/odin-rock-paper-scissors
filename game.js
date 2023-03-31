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
        return `It's a draw! Both you and the opponent played ${playerSelection}.`;
    } else if (playerSelectionNumeric == 1 && computerSelection == 2) {
        return "You lose! Paper beats rock.";
    } else if (playerSelectionNumeric == 1 && computerSelection == 3) {
        return "You win! Rock beats scissors.";
    } else if (playerSelectionNumeric == 2 && computerSelection == 1) {
        return "You win! Paper beats rock.";
    } else if (playerSelectionNumeric == 2 && computerSelection == 3) {
        return "You lose! Scissors beats paper.";
    } else if (playerSelectionNumeric == 3 && computerSelection == 1) {
        return "You lose! Rock beats scissors.";
    } else {
        return "You win! Scissors beats paper."
    }
    
}

console.log(paperScissorsRock('rock',getComputerChoice()))