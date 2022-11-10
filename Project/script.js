let myTestArray = [87, -5, 2, -6, 3, 4, 16];
// myTestArray.push('new element');
// console.log(myTestArray);

// const myAwesomeArray = ['Bob', 'Alex', 'Joe'];
// myAwesomeArray.push('Mary');
// myAwesomeArray.unshift('new_element')
// const myAwesomeArray = new Array(5);
// myAwesomeArray.splice(1,1, 'Steve')

// const myAwesomeArray = ['Bob', 'Alex', 'Joe'];
// delete myAwesomeArray[1];

// let myAwesomeArray = ['Bob', 'Steve', 'Alex', 'Joe', 'Alex', 'Bob', 'Steve', 'Alex'];
// const myAwesomeObject = {
//     name : "Bill", age: 55, getAge: () => { return myAwesomeObject.age }
// };

// function AwesomeObject (name, age) {
//     this.name = name; this.age = age;
// };
// const myAwesomeObject = AwesomeObject("Bob", 55);
// myAwesomeObject.age = 44;
// const myAwesomeObject = { name : "Bill", age: 55 };
// const copiedObject = myAwesomeObject;
// myAwesomeObject.age = 77;
// const userName = 'Alex';
// const myAwesomeObject = { [userName] : 33, }

// function AwesomeObject (name, age) {
//     this.name = name; this.age = age;
// };
// const myAwesomeObject = new AwesomeObject("Bob", 55);

// const myAwesomeObject = {
//     name : "Bill", age: 55, getAge: () => { return this.age }
// };

// const myAwesomeObject = {
//     name: "Bob", skillsYears: {
//         hard: { javascript: 3, angular: 2 },
//         soft: { scrum: 1 } } };

// const myAwesomeObject = { name : "Bill", age: 55, getAge: () => { return myAwesomeObject.age } }
//
// function AwesomeObject (name, age) { this.name = name; this.age = age; };
// const myAwesomeObject = new AwesomeObject("Bob", 55);

// function AwesomeObject (name, age) { this.name = name; this.age = age; };
// const myAwesomeObject = new AwesomeObject("Bob", 55);
// myAwesomeObject.age = 44;

// function AwesomeObject (name, age) {
//     this.name = name;
//     this.age = age;
//     this.getAge = () => {return this.age} };
// const myAwesomeObject = new AwesomeObject("Bob", 55);
// AwesomeObject.age = 77;
// function getUserAge () {
//     return age
// };
// const myAwesomeObject = { name : "Bill", age: 55, getAge: getUserAge };

// myAwesomeObject.age = ' '
// const myAwesomeObject = { name: "Bob", skillsYears: { hard: { javascript: 3, angular: 2 }, soft: { scrum: 1 } } };

function getUserAge () { return age };
const myAwesomeObject = { name : "Bill", age: 55, getAge: getUserAge };
console.log(myAwesomeObject.getAge())