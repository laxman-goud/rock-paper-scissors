const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorEl = document.getElementById("scissor");

const winnerEL = document.querySelector(".winner");
const playerScore = document.getElementById("player-score");
const botScore = document.getElementById("bot-score");

const playerHand = document.getElementById("player-hand");
const botHand = document.getElementById("bot-hand");
const selectChoice = document.querySelector('.choiceH');

let playerPoints = 0;
let botPoints = 0;

const play = (choice) => {
    const choices = ["rock", "paper", "scissor"]; // ✅ using "scissors" everywhere
    const botChoice = choices[Math.floor(Math.random() * 3)];

    // Reset hands to rock image and start animation
    playerHand.src = 'images/rock.png';
    botHand.src = 'images/rock.png';
    selectChoice.classList.add('hide');
    playerHand.classList.add("shake1");
    botHand.classList.add("shake2");

    winnerEL.textContent = "Wait...";

    setTimeout(() => {
        playerHand.src = `images/${choice}.png`;
        botHand.src = `images/${botChoice}.png`;

        let result = "";
        void playerHand.offsetWidth;
        if (choice === botChoice) {
            result = "It's a draw!";
        } else if (
            (choice === "rock" && botChoice === "scissor") ||
            (choice === "paper" && botChoice === "rock") ||
            (choice === "scissor" && botChoice === "paper")
        ) {
            result = "You win!";
            playerPoints++;
        } else {
            result = "Bot wins!";
            botPoints++;
        }

        winnerEL.textContent = `Bot chose ${botChoice}. ${result}`;
        playerScore.textContent = playerPoints;
        botScore.textContent = botPoints;
        
        selectChoice.classList.remove('hide');
        playerHand.classList.remove("shake1");
        botHand.classList.remove("shake2");
    }, 1000);
};

// ✅ Add event listeners
rockEl.addEventListener("click", () => play("rock"));
paperEl.addEventListener("click", () => play("paper"));
scissorEl.addEventListener("click", () => play("scissor")); // ✅ consistent
