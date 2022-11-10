let $ = function (id){
    return document.getElementById(id);
}
function calculateMpg(miles, gallons){

    let mpg = (gallons / miles);
    mpg = mpg.toFixed(2);
    return mpg;
}
let processEntries = function (){
    let miles = $("miles").value;
    let gallons = $("gallons").value;
    let isValid = true;
    if(isNaN(miles) || miles <= 0){  //check if the input is a number an if it's greater or equal to zero
        $("MilesError").innerHTML = "Please Enter a positive number!";  //alert message
        $("miles").value = "";
        $("gallons").value = "";
        $("MPG").value = "";
        isValid = false;
    }
    if(isNaN(gallons) || gallons <= 0){  //check if the input is a number an if it's greater or equal to zero
        $("GallonsError").innerHTML = "Please Enter a positive number!";  //alert message
        $("miles").value = "";
        $("gallons").value = "";
        $("MPG").value = "";
        isValid = false;
    }
    if(isValid){
        $("MPG").value = calculateMpg(miles, gallons);
    }
}
let clearEntries = function (){  //a function to clear all entries and alerts
    $("miles").value = "";
    $("gallons").value = "";
    $("MPG").value = "";
    $("MilesError").innerHTML = "";
    $("GallonsError").innerHTML = "";
}
window.onload = function (){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("miles").ondblclick = clearEntries;
    $("miles").focus();
}

