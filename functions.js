function greetUser() {
  let name = document.getElementById("nameInput").value;
  let message = "Congratulations, " + name + "! You have been randomly selected for a chance to win a $50 Amazon Gift Card! All you have to do is go to www.winagiftcard/obvious/scam.com";
  document.getElementById("greeting").innerHTML = message;
}
