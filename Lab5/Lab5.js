/*
* The purpose of this lab is to demonstrate the use of functions and arrays to create
* a simple employee management application. The user will be able to perform simple CRUD
* operations like retrieve all employees, add new employees, and delete existing employees.*/

// let employee = [];
// employee["name"] = "Zak Ruvalcaba";
// localStorage.saveItem("itemname", "value") // saves the data in the item
// localStorage.getItem("itemname") // gets the data in the item
// localStorage.removeItem("itemname") // removes the item
// localStorage.clear()
//
// localStorage.key()  // index number

function add(){
    let index = 0;
    const employees = [];
    for(let i = 0; i < employees.length; i++){
        if(employees[i] === null){
            index += 1;
            employees[i] = localStorage.setItem(toString(index), window.prompt("Enter employee name"));
            break;
        }
    }
}
function del(index, ...args){
    show();
}
function exit(){

}
function show(...args){

}
function runApp(){

}

function readCommand(){
    const commands = ["show", "add", "del", "exit"];
    let command = window.prompt("Please enter the command! " +
        "show - Show all employees " +
        "add - Add as an employee " +
        "del - Delete and employee" +
        "exit - Exit the program ");
    let com =true;
    if(command in commands){
        return command;
    }else{
        com = false
        while(com === false){
            command = window.prompt("Please enter the command! " +
                "show - Show all employees " +
                "add - Add as an employee " +
                "del - Delete and employee" +
                "exit - Exit the program ");
            if(command in commands){
                com = true;
            }
        }
        return command;
    }
}
