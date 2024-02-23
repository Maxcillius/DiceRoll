function decide() {
  var one = Math.floor(Math.random() * 6) + 1;
  var two = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".number1 > p").textContent = one;
  document.querySelector(".number2 > p").textContent = two;

  if (one > two) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else if (one < two) {
    document.querySelector("h1").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h1").textContent = "Tie";
  }
}
