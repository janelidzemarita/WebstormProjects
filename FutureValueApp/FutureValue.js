let $ = function (id){
    return document.getElementById(id);
};
function getMoney(investment, rate, time){ // იანგარიშება მოგება მითითებულ დროში
    let result = investment + ((investment / 100) * rate) * time ;    // The formula may not be correct. I don't know how it is calculated
    result = result.toFixed(3);   //დაამრგვალოს მეათასედზე
    return result;
}
let processEntries = function (){  //ეს ფუნქცია ამოწმებს შეტანილ მონაცემებს რომ არის დადებითი ციფრები
    let investment = $("investment").value;
    let rate = $("rate").value;
    let time = $("time").value;
    let isValid = true;
    if(isNaN(investment) || investment <= 0){
        alert("Please Enter a positive number!");
        isValid = false;
    }
    if(isNaN(rate) || rate <= 0){
        alert("Please Enter a positive number!");
        isValid = false;
    }
    if(isNaN(time) || time <= 0){
        alert("Please Enter a positive number!");
        isValid = false;
    }
    if(isValid){   // თუ ციფრი დადებითია მაშინ იძახებს ფუნქციას getMoney().
        $("result").value = getMoney(investment, rate, time);
    }
};
let clearEntries = function (){  // ეს ფუნქცია შლის ჩაწერილ მონაცემებს რათა მომხმარებელს ხელახლა სეეძლოს შეტანა ახალი მონაცემების
    $("investment").value = "";
    $("rate").value = "";
    $("time").value = "";
    $("result").value = "";
};
window.onload = function (){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    // $("investment").ondblclick = clearEntries;
    $("investment").focus();
};