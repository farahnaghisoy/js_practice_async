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
// function anonimFunction(){
//     var localVariable = "sadece daxilde isleyir";
//     console.log(localVariable);
// }
// anonimFunction();
//   const name = "admin";
//   const Password = "5432";
// --------------------------------------
//   function loginSystem(username , pass){
//     if(username == name && pass == Password){
//         return "success";
//     } else{
//         return "failed";
//     }
//   }
//   console.log(loginSystem("admin","12345"));
//   console.log(loginSystem("admin","5432"));
// ------------------------------------------------
// global
// var glbl = 25;
//     function calculateSquare(num){
//         return num*num
//     }

// console.log(calculateSquare(glbl));
// ------------------------------------

// Adları Böyük Hərflərlə Yazan Funksiya
//  const names = ["leyli","aylin","banu","laman","alsu"];
//  function capitalizeNames(namesArray) {
//    return namesArray.map(function(nameItem){
//     // return nameItem.toUpperCase();
//     if(nameItem == "aylin"){
//         return "Farah";
//     } else{
//         return nameItem;
//     }
//    });
//   }
 
//    function myFilter(charecther, namesArray){
//         return namesArray.filter((name) => name.startsWith(charecther));
//    }
//    console.log(myFilter("a", names));

// Temperatur Çevirici
const tempr = 45;
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
console.log(convertTemperature(tempr,"F"));