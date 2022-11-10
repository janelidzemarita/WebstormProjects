let $ = function (id){
    return document.getElementById(id);
};
// function to calculate the average score
function getAverage(){
    let grade1 = $("grade1").value ;
    let grade2 = $("grade2").value ;
    let grade3 = $("grade3").value ;
    let avr = (Number(grade1) + Number(grade2) + Number(grade3)) / 3; //Number() is used to read the values as numbers
    $("avr").value = avr.toFixed(2); //assign the calculated value to avr input.
}
