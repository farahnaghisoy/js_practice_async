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
