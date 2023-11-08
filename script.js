function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function startGame() {
  const player1Value = rollDice();
  const player2Value = rollDice();

  const player1ImgSrc = `images/dice${player1Value}.png`;
  const player2ImgSrc = `images/dice${player2Value}.png`;

  document.querySelector(".img1").src = player1ImgSrc;
  document.querySelector(".img2").src = player2ImgSrc;

  setTimeout(function() {
    if (player1Value > player2Value) {
      alert("Spieler 1 gewinnt!");
    } else if (player2Value > player1Value) {
      alert("Spieler 2 gewinnt!");
    } else {
      alert("Es ist ein Unentschieden!");
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", function() {
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', startGame);
});