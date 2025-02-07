// pop, push, slice, splice, shift, unshift
/*1. let hobbies = ["Candle making", "writing code","reading book"];
hobbies.push("make coffee", "SUCCESSFULLL");
let lastHobbi = hobbies.pop();
let first = hobbies.shift();
hobbies.unshift("love tuliphans");
hobbies.splice( 1,4, " I love you my Handsome");
console.log(hobbies); */
//-------------------------------------
// map, reduce, filter
/*2. let numbers = [8,4,16,11,25];
let cube = numbers.map(num => num ** 2);
console.log(cube);
// Filter
const flowers = 
    [
        {name: "Rose", price: 1300},
        {name: "Tulip", price: 1500},
        {name: "Daffodil", price: 235}
        
    ];
    let expensiveFlowers = flowers.filter(item => item.price > 1000);
    console.log(expensiveFlowers);

// function expensiveFlower(){
//     let expensiveOnee = 0;
//     let targetItems = null;
//     flowers.forEach(item => {
//         if (expensiveOnee <= item.price) {
//             // expensiveOnee = item.price;
//             targetItems = item;
//         }
//     });
//     return targetItems;
// } 
// console.log(expensiveFlower()); */
//OBJECT
// let person = {
//     name: "Vugar",
//     age: 25,
//     film:"interstaller"
// };
// console.log(person);

// let lesson = {
//   language: "JavaScript",
//   Firstname: "Mocha",
//   level: "Intermidate",
//   year: 1995
// };

// lesson.author = "Brendan Eich";
// // delete lesson.level;

//     function updateLesson(obj, newFirstname, newlevel ){  //Dinamik Olarak Güncelleme
//         obj.Firstname = newFirstname;
//         obj.level = newlevel;
//     }
//     updateLesson(lesson, "LiveScript ", "Advanced");
// console.log(lesson);

// let company = {
//  name: "Adviad",
//  employess: [
//     {name: "Vugar", position: "Software", salary: 2050 },
//     {name: "Farah", position: "Developer", salary: 1000 },
//  ]
// };
//     console.log(company.employess[0].name);
//     console.log(company.employess[1].position);

// --------------------------------------
// let person = {
//     name: "Farah",
//     greet: function(){
//         return `Hi, I'm ${this.name}!`;
//     }
// };
// person.hobby = "yoga making"
// // console.log(person.heyo());
// // console.log(Object.keys(person));
// console.log(Object.values(person));
// // console.log(Object.entries(person));
//  ----------------------------------------------
// Class
// class Instrument{
//     constructor (model1, model2, year1, year2 ){
//         this.model1 = model1;
//         this.model2 = model2;
//         this.year1 = year1;
//         this.year2 = year2;
//     }
//     start(){
//         console.log(`${this.model1}   ${this.year1} prepared.`);
//     }
// }
// let musicalInstrum = new Instrument("violin", 2021, 2025 );
// musicalInstrum.start();
// ----------------------------------------------------------
// JSON 
// let user = {name:"Bararos", age: 56};
//     // obj stringify formatina chevrildi
// let jsonStr = JSON.stringify(user);
// console.log(jsonStr);

// // JSON stringini obyektə çeviririk
// let userObj = JSON.parse(jsonStr);
// console.log(userObj);


    



