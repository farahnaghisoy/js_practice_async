
/**
 * 1) Promise nedir
 * 2) Promise nece yaradilir
 * 3) Promise harda lazim olur
 * 4) Promise de Promise (Kocamda kocam)
 * **/

const requestToBack = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let responseFromBack = {
      message: "Success",
      data: {
        fullname: "Farah Naghisoy",
        age: 21,
      },
    };

    resolve(responseFromBack);
  }, 1000 * 3);
});

console.log("Code işe düşdü");
async function GetDataFromBack() {
    console.log("Sorğu göndərilir...");

    await requestToBack
    .then(function (response) {
      console.log("Uğurlu nəticə çünki:", response);
    })
    .catch(function (error) {
      console.log("Uğursuz nəticə çünki:", error);
    });
    
    console.log("Code işi bitdi!");
}

GetDataFromBack();