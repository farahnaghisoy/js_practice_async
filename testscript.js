// const sayPromise = new Promise((resolve, reject) => {
//     const Success = false;
//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed!");
//     }

// });
// sayPromise 
//     .then(function(resolve){
//         console.log('succes');
//     });
//     .catch(function(reject)  {
//         console.log('error');
//     });

/**Simple Callback-->Funksiyadan sonra çağırılan digər funksiyalar.
 
// function testData(Callback){
//     setTimeout(()=>{
//         console.log('məlumat getirilib:');
//         Callback();
//     }, 2000);
// }
// testData(()=>{
//     console.log("callback işə düşdü");
// });
// ---------------------------------------
// Tələbə haqqında məlumatları gətirmək
//  function getStudentData(callback){
//     console.log("Tələbənin məlumatları gətirillir..");
//     setTimeout(()=>{
//         const student = {
//             name:"Farah",
//             grades: [85, 90, 78, 92, 88],
//         };
//             callback(student);
//         console.log("Tələbə məlumatları gətirildi.");
//     },2000);
//  }
//  getStudentData((student)=>{
//     console.log("callback işe düşdü,student:",student);
//  });
 
//  Profil məlumatlarını gətirən funksiya
// function getProfileData(callback){
//     console.log("Profil məlumatlarını gətir:");
//     setTimeout(()=>{
//         const profile ={
//             name :"anonim",
//             age:  24
//         };
//         callback(profile);
//     },3000);
// }
// getProfileData((profile)=>{
//     console.log("callback işe düşdü, profil:",profile);
// });
//  **/
// -------------------------------
// Promise
/*function getUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const getSuccesData =  {
                message: "success",
                data:{
                    name:"Farah",
                    id:313,
                    parol: 54323
                }
            };

            if(getSuccesData.message ==="success" ){
                resolve(getSuccesData);
            } else{
                reject({
                    message: "failed",
                });
            }
            
        },2000);
    });
}
getUserData()
    .then(function(response){
        console.log("ugurlu", response);
    })
    .catch(function (error) {
        console.error("Xəta:", error);
    });
    */
// Task->Bir onlayn mağaza üçün istifadəçi sifarişlərinin işlənməsi sistemini yaradın. 
 /*function operationOrder(order){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.5; // 50% uğur şansı
            if (isSuccessful) {
                resolve({
                    status: "success",
                    message: "Sifariş uğurla təsdiqləndi!",
                });
            } else{
                reject({
                    status:"failed",
                    message: "Sifariş təsdiqlənmədi.",
                });
            }
        }, 2000);
    });
}
const UserOrder = {
    data: 
    {
        product: "Convers",
        price: 233,
        id: 313,
    }
};

console.log("sifaris hazirlanir..");
operationOrder(UserOrder)
.then((Response)=>{
    console.log("success", Response.message);
})
.catch((Error) =>{
    console.error("failed", Error.message);
    
}); */
// async function myCodeProcess() {
//    try{
//     console.log("code processing");
//    } catch(error){
//     console.log("catch isleyir");
//     console.log("kodun işlemir çünki kodunda bug var", error.data.reason);
//    }
//     console.log("code bitdi");
    
// }
// myCodeProcess();

