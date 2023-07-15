const game=new Game()
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  
  startButton.addEventListener("click", function () {
    startGame();
  });
  
  function startGame() {
    console.log("start game");
    game.start()
  }
  window.addEventListener(
    "keydown",
    (event) => {
        switch (event.key) {
            case "ArrowDown":
                game.player.directionY += 1
                break;
            case "ArrowUp":
              game.player.directionY -= 1
                break;
            case "ArrowLeft":
              game.player.directionX -= 1
                break;
            case "ArrowRight":
              game.player.directionX += 1
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    });
restartButton.addEventListener("click", function () {
  location.reload()

})
};
// document.getElementById("score").innerHTML=game.score
//  document.getElementById("lives").innerHTML=game.lives



