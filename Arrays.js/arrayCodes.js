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

let company = {
 name: "Adviad",
 employess: [
    {name: "Vugar", position: "Software", salary: 2050 },
    {name: "Farah", position: "Developer", salary: 1000 },
 ]
};
    console.log(company.employess[0].name);
    console.log(company.employess[1].position);
    



