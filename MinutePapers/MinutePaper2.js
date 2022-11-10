function guessColor() {
    let color = ["Green", "Yellow", "Red", "Black", "White", "LightBlue", "Blue"];
    let guess1 = document.getElementById("firstGuess").value;
    let guess2 = document.getElementById("secondGuess").value;
    let guess3 = document.getElementById("thirdGuess").value;

    if(guess1 in color && guess2 in color && guess3 in color) {
        alert("You guessed right");

    }else {
        alert("Wrong guess");
    }
}
window.onload = function (){
    $("guess").onclick = guessColor;
    $("miles").focus();
};