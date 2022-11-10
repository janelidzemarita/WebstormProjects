
let colors = generateRandomColors(numSquares);
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easyButton");
let random = randomColor();

easyBtn.addEventListener("click", function(){
    let R = document.getElementById("ColorR");
    let G = document.getElementById("ColorG");
    let B = document.getElementById("ColorB");
    let count = 0;
    while (true){
        if(random[0] == R && random[1] == G && random[2] == B){
            alert("You win! It took " + count + " guesses");
            break;
        }else if(random[0] == R || random[1] == G || random[2] == B) {
            alert("Tou got some right! Try again!");
            continue;
        }else{
            alert("None of them are right! Try again!")
        }
    }

});


function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let arr = [r, g, b];
    return arr;
}