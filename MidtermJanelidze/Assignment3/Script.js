let arr = [];
function submiting() {

    let g;
    let temp = 0;
    let x = document.getElementById("names").value;
    let y = document.getElementById("cities").value;
    let z = document.getElementsByName("gender");
    for (let index = 0; index < z.length; index++) {
        if (z[index].checked) {
            temp += 1;
            g = z[index].value;
        }
    }
    if (x === "" || y === "none" || temp === 0) {
        alert("Please Enter All Values!");
        return;
    }
    const user = {
        name: x,
        city: y,
        gender: g
    };
    arr.push(user);
    window.alert( x + " Registered");
}

function res() {
    arr = [];
}