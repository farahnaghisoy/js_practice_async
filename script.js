/**
 * 1) Promise nedir
 * 2) Promise nece yaradilir
 * 3) Promise harda lazim olur
 * 4) Promise de Promise (Kocamda kocam)
 * **/
console.clear();
const requestToBack = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    setTimeout(function () {
      let responseFromBack = {
        message: "Login Success",
        data: {
          fullname: "Vugar Safarzada",
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

console.log("====== Code işe düşdü ======\n");
async function GetDataFromBack() {
  console.log("Sorğu göndərilir...");
  const response = await requestToBack;
  return response;
}

// Başqa bir faylda nece işledeceyik:
// -------------------------------------

// Birinci yazim şəkli (then və catch) methodlari ile
// ** then ve catch yazmaq üçün hökmən promise olmalıdı -> Promise.then, Promise.catch ola biler ancaq
async function sayMyName() {
  await GetDataFromBack()
    .then((response) => {
      console.log("[ then işə düşdü ]");
      // ** Neticə uğurlu gələrsə nə edəcəyik bura yazırıq **
      // Catch heç vaxt işə düşməyəcək!
      console.log("Hello, my name is", response.data.fullname);
    })
    .catch((error) => {
      console.log("[ catch işə düşdü] ");
      // ** Error gələrsə hansı tədbirlər görüləcək bura yazırıq **
      // Then heç vaxt işə düşməyəcək!

      console.log("I dont know your name! because:", error.data.reason);
    }).finally(() => {
        console.log("\n====== Code işi bitdi! ======");
    })
}

// Ikinci yazım şəkli (try və catch) methodlari ie
// ** Try catch yazmaq üçün promise olub olmaması önəmli deyil istənilən yerə yazıla bilər
async function howOldAreYou() {
  try {
    console.log("[ Try işə düşdü ]");
    // ** Try içində baş verə biləcək istənilən xətada catch işə düşəcək
    const person = await GetDataFromBack(); // Try xəta verən yerdən sonrası işləməyəcək
    console.log("I am", person.data.age, "years old!");

  } catch (error) {
    // ** Catch yalniz Try içində baş verə biləcək istənilən xətada işə düşəcək
    console.log("[ Catch işə düşdü] ");
    console.log("I dont know your age! because:", error.data.reason);
  } finally {
    console.log("\n====== Code işi bitdi! ======");
  }
}
howOldAreYou();

/**
 * then və catch ancaq promise . qoyularaq qoşulur
 * try və catch istenilen yere yazila biler
 *
 * then və catch ancaq ya then işe düşer yada catch ikisinden biri ancaq çalışır ikisi eyni anda əsla
 * try və catch birinci try işə düşür ardından error olarsa əgər catch işə düşür error olmasa elə trydan keçib gedir
 **/
