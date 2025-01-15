/**
 * 1) Promise nedir
 * 2) Promise nece yaradilir
 * 3) Promise harda lazim olur
 * 4) Promise de Promise (Kocamda kocam)
 * **/

const myPromise = new Promise(function(resolve, reject){
    let responseFromBack = {
        message: "Success",
        data: {
            fullname: "Farah Naghisoy",
            age: 21
        }
    };
    
    if(responseFromBack !== null) {
        resolve(responseFromBack);
    } else {
        reject({
            message: "Failed!",
            data: {}
        });
    }
});


myPromise
    .then(function(response){
        console.log('Uğurlu nəticə çünki:', response)
    })
    .catch(function(error){
        console.log('Uğursuz nəticə çünki:', error)
    })