function getBalanceData(){
    return new Promise((resolve, reject) => {
       console.log("Balance cheking...");
        setTimeout(() => {
            const balance = 100;
            if (balance >= 50) {
                resolve({
                    status: "success",
                    msj: "Netice uğurludur",
                });
            } else {
                reject({
                    status: " Balance Failed!",
                    msj: "Balans kifayet qeder deyil",
                });
                
            }
        }, 3000);
     });
    }
     async function transferBalance(amount) {
        try {
            const result = await getBalanceData();
            console.log(`Əməliyyat uğurla həyata keçirildi! Köçürülən məbləğ: ${amount}`);
            console.log(result.msj);
        } catch (error) {
            console.log(`Xəta baş verdi: ${error.msj}`);
        }
    }

transferBalance(50);