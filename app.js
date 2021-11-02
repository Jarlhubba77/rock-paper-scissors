let userScore = 0;
let computersCore = 0;
let userScoreSpan = document.getElementById("user-scorespan");
let computerScorespan = document.getElementById("computer-scorespan");
let borderDiv = document.getElementById("border");
let resultDiv = document.querySelector(".result > p");
let rockDiv = document.getElementById("R")
let paperDiv = document.getElementById("P")
let scissorskDiv = document.getElementById("S")

function getComputerChoice() {
    let choices = ["R", "P", "S"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "R") return "Rock"
    if (letter === "P") return "Paper"
    return "Scissors"
}


function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computersCore = computersCore;
    let smallUserWord = "user".fontsize(3).sup();
    let smallCompWord = "comp".fontsize(3).sup();
    resultDiv.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord}. You win!!!!`;

}

function lose(userChoice, computerChoice) {
    computersCore++;
    computerScorespan.innerHTML = computersCore;
    userScore = userScore;
    let smallUserWord = "user".fontsize(3).sup();
    let smallCompWord = "comp".fontsize(3).sup();
    resultDiv.innerHTML = `${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallCompWord}. Opps you lost!!!!`;
}

function draw(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sup();
    let smallCompWord = "comp".fontsize(3).sup();
    resultDiv.innerHTML = `${convert(userChoice)}${smallUserWord} equal ${convert(computerChoice)}${smallCompWord}. It's a draw but you can do it!!!!`;
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RS":
        case "PR":
        case "SP":
            win(userChoice, computerChoice)
            break;
        case "RP":
        case "PR":
        case "SR":
            lose(userChoice, computerChoice)
            break;
        case "RR":
        case "PP":
        case "SS":
            draw(userChoice, computerChoice)
            break;

    }

}

function main() {
    rockDiv.addEventListener('click', function() {
        game("R")
    })
    paperDiv.addEventListener('click', function() {
        game("P")
    })
    scissorskDiv.addEventListener('click', function() {
        game("S")
    })
}
main()