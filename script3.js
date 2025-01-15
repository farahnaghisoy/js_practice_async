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
    const response = await requestToBack;
    return response;
}

// Başqa bir faylda nece işledeceyik:

async function sayMyName(){
    const person = await GetDataFromBack();
    console.log('Hello', person.data.fullname);
}

async function howOldAreYou() {
    const person = await GetDataFromBack();
    console.log('I am', person.data.age, 'years old!');
}

sayMyName();
howOldAreYou();