/**
 * 1) Promise nedir
 * 2) Promise nece yaradilir
 * 3) Promise harda lazim olur
 * 4) Promise de Promise (Kocamda kocam)
 * **/

const requestToBack = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    setTimeout(function () {
      let responseFromBack = {
        message: "Login Success",
        data: {
          fullname: "Farah Naghisoy",
          age: 21,
        },
      };

      resolve(responseFromBack);
      // Resolve then tetikleyecek
    }, 1000 * 3);
  } else {
    setTimeout(function () {
      let responseFromBack = {
        message: "Login Failed",
        data: {
          reason: "Email or Password wrong",
        },
      };

      reject(responseFromBack);
      // Reject catch tetikleyecek;
    }, 1000 * 3);
  }
});

console.log("Code işe düşdü");
async function GetDataFromBack() {
  console.log("Sorğu göndərilir...");
  const response = await requestToBack;
  return response;
}

// Başqa bir faylda nece işledeceyik:
// -------------------------------------

// Birinci yazim şəkli (then və catch) methodlari ile
async function sayMyName() {
  await GetDataFromBack()
    .then((response) => {
      // ** Neticə uğurlu gələrsə nə edəcəyik bura yazırıq **
      // Catch heç vaxt işə düşməyəcək!
      console.log('Hello, my name is', response.data.fullname);
    })
    .catch((error) => {
      // ** Error gələrsə hansı tədbirlər görüləcək bura yazırıq **
      // Then heç vaxt işə düşməyəcək!
    
      console.log('I dont know your name! because:', error.data.reason);
    });
}

async function howOldAreYou() {
  const person = await GetDataFromBack();
  console.log("I am", person.data.age, "years old!");
}

sayMyName();
