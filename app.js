let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const newGame = document.querySelector("#new-btn");

const resetgame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game reset! Start playing again.";
    msg.style.backgroundColor = "#081b31";
}

newGame.addEventListener("click", () => {
    //reset game
    resetgame();
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
           //rock, scissors
            userWin = compChoice === "scissors" ? false : true; 
        }
        else {
           //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    msg.innerText = "It's a draw";
    msg.style.backgroundColor = "#FFD700";
    msg.style.color = "#000000";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "#fff";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#fff";
    }
}