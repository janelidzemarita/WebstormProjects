let $ = function (id){
    return document.getElementById(id);
};
function calculateMpg(miles, gallons){
    let mpg = (gallons / miles * 100);
    mpg = mpg.toFixed(2);
    return mpg;
};
let processEntries = function (){
    let miles = $("miles").value;
    let gallons = $("gallons").value;
    let isValid = true;
    if(isNaN(miles) || miles <= 0){
        alert("Please Enter a positive number!");
        isValid = false;
    }
    if(isNaN(gallons) || gallons <= 0){
        alert("Please Enter a positive number!");
        isValid = false;
    }
    if(isValid){
        $("MPG").value = calculateMpg(miles, gallons);
    }
};
let clearEntries = function (){
    $("miles").value = "";
    $("gallons").value = "";
    $("MPG").value = "";
};
window.onload = function (){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("miles").ondblclick = clearEntries;
    $("miles").focus();
};