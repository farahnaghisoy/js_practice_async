// function getBalanceData(){
//     return new Promise((resolve, reject) => {
//        console.log("Balance cheking...");
//         setTimeout(() => {
//             const balance = 100;
//             if (balance >= 50) {
//                 resolve({
//                     status: "success",
//                     msj: "Netice uğurludur",
//                 });
//             } else {
//                 reject({
//                     status: " Balance Failed!",
//                     msj: "Balans kifayet qeder deyil",
//                 });
                
//             }
//         }, 3000);
//      });
//     }
//      async function transferBalance(amount) {
//         try {
//             const result = await getBalanceData();
//             console.log(`Əməliyyat uğurla həyata keçirildi! Köçürülən məbləğ: ${amount}`);
//             console.log(result.msj);
//         } catch (error) {
//             console.log(`Xəta baş verdi: ${error.msj}`);
//         }
//     }

// transferBalance(50);
/**Function Scope vs. Global Scope */
//Function Scope
/* function anonimFunction(){
    var localVariable = "sadece daxilde isleyir";
    console.log(localVariable);
}
anonimFunction();
  const name = "admin";
  const Password = "5432";
--------------------------------------
  function loginSystem(username , pass){
    if(username == name && pass == Password){
        return "success";
    } else{
        return "failed";
    }
  }
  console.log(loginSystem("admin","12345"));
  console.log(loginSystem("admin","5432")); */
// global
// var glbl = 25;
//     function calculateSquare(num){
//         return num*num
//     }

// console.log(calculateSquare(glbl));
// ------------------------------------

// Adları Böyük Hərflərlə Yazan Funksiya
/* const names = ["leyli","aylin","banu","laman","alsu"];
 function capitalizeNames(namesArray) {
   return namesArray.map(function(nameItem){
    // return nameItem.toUpperCase();
    if(nameItem == "aylin"){
        return "Farah";
    } else{
        return nameItem;
    }
   });
  }
 
   function myFilter(charecther, namesArray){
        return namesArray.filter((name) => name.startsWith(charecther));
   }
   console.log(myFilter("a", names)); */

// Temperatur Çevirici
/*const tempr = 45;
function convertTemperature(temperture, unit){
    if (unit == "C") {
        return (temperture * 9/5) + 32;
    } else if(unit == "F"){
        return (temperture - 32) * 5/9;
    } else{
        return "unit failed!"
    }
}
console.log(convertTemperature(tempr,"C"));
console.log(convertTemperature(tempr,"F")); * */

// For Loop
// 1.Sayıların Toplamını Hesapla
/*
const nums = [5,10,15,25,30];
let total = 100;
for (let index = 5; index < nums.length; index++) {
    total += nums[index]; 
}
console.log("Sayıların Toplamını Hesapla:", total );*/
 
// 2.Çift Sayıları Bul
/*const  numbers = [2,3,6,9,4,10,12];
let evenNums = [];
    for (let index = 0; index < numbers.length; index ++) {
      if(numbers[index] % 2 === 0 ){
         evenNums.push(numbers[index]);
      }
    }
console.log(" Çift Sayıları Bul:", evenNums);*/

// Karelerini Hesapla
/*const numbers = [4, 5, 6, 8];
let calculateCubs = [];
  for (let v = 0; v < numbers.length; v++) 
  {
      calculateCubs.push(numbers[v]**3);
  }
  console.log("Karelerini Hesapla:",calculateCubs);* */

// while
// let timer = 0;
// while (timer < 5){
//   console.log(timer);
//   timer++;
// }


// let evenNum = 4;
// do{
//   console.log(evenNum);
//   evenNum++;
// } while(evenNum <= 20);
// --------------------
//  İstifadəçi girişini yoxlama
// let input;
//   do {
//     input = prompt("parolunuzu yazın:");
//   } while (input !== "1234");
//   console.log("Düzgün parol daxil edildi");???

//FAktorial
// let num = 5;
// let factorial = 1;
// do {
//   factorial*= num;
//   num--;
// } while (num > 0);
// console.log("Faktorial: " + factorial);
console.clear();


// const id = setTimeout(() => {
  
//   console.log("Vuqarimm 1")
// }, 1000);
// console.log("heyoo 2");
//   clearTimeout(id);

//  function myFunc(example1) {
//   console.log(2);
//   example1();
//  }
// myFunc(()=>{
//   console.log(1);
// });

//  recursion
// function example1() {
//   console.log("salammm olsunn");
//   return null;
//   example1();
// }
// example1();

// ------- CALLBACK-----
// function writeF(example2) {
//   console.log("Tastamammm2");
//   example2();
// }
// writeF(()=>{
//   // console.log("miraba marmızıı");
// });

// ---bozukk----
// let count = 0;
// function example3() {
//   if(count == 8){
    
//     return 3;
//   }
//   count++;
//   console.log('Git bashImdan');
//   example3();
// }
// example3();

