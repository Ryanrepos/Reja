
//  📌  📌  📌   Callback functions. 

/*
console.log("Jack Ma maslahatlari");

const list = ["Yaxshi talaba bo'ling",  // 10-20
    "to'gri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashni boshlang",  // 30-40
    "siz kuchli bo'lgan narsalarni qiling",  // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
    if (typeof a !== "number") callback ("insert a number", null);

    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]); 
    else if (a > 30 && a <= 40) callback(null, list[2]); 
    else if (a > 40 && a <= 50) callback(null, list[3]); 
    else if (a > 50 && a <= 60) callback(null, list[4]); 
    else {
        setTimeout(function() {
            callback(null, list[5]);
        }, 5000);
    }

}
console.log("passed here 0");
maslahatBering(25, (err, data) => {
    if (err) console.log("ERROR:", err);
    console.log("javob:", data);
});

console.log("passed here 1");
*/

//   📌  📌  📌  Asynchronous functions..
/*
console.log("Jack Ma maslahatlari");

const list = ["Yaxshi talaba bo'ling",  // 10-20
    "to'gri boshliq tanlang va koproq hato qiling", // 20-30
    "uzingizga ishlashni boshlang",  // 30-40
    "siz kuchli bo'lgan narsalarni qiling",  // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error ("insert a number");

    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[0];
    else if (a > 30 && a <= 40) return list[1]; 
    else if (a > 40 && a <= 50) return list[2];
    else if (a > 50 && a <= 60) return list[3];
    else {
        return list[5];

        // setTimeout(function() {
        //     return list[5];
        // }, 5000);
    }

}

*/

// then.catch
// console.log("passed here 0");

// maslahatBering(25).then(data => {
//     console.log("javob:", data);
// }).catch(err => {
//     console.log("Error:", err);
// })

// console.log("passed here 1");

// async / await

// async function run (){
//     let javob = await maslahatBering(21);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);

// }

// run();

            // 📌  📌  📌 Promise functions

// console.log("Jack Ma maslahatlari");

// const list = ["Yaxshi talaba bo'ling",  // 10-20
//     "to'gri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashni boshlang",  // 30-40
//     "siz kuchli bo'lgan narsalarni qiling",  // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error ("insert a number");

//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[0];
//     else if (a > 30 && a <= 40) return list[1]; 
//     else if (a > 40 && a <= 50) return list[2];
//     else if (a > 50 && a <= 60) return list[3];
//     else {
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }

// }


// 📌📌📌 MITASK-A

function countLetter(harf, soz) {
    let count = 0;
    let index = 0;
    
    while (index < soz.length) {
        if (soz[index] === harf) {
            count++;
        }
        index++;
    }
    
    return count;
}



console.log(countLetter("e", "handphone"));     // bu holatda 1 ni qaytaradi
console.log(countLetter("a", "lightweight"));   // bu holatda esa 0 ni qaytaradi sababi a ishtirok etmagan
console.log(countLetter("o", "macbook"));       // bunda esa macbook so'zida ikkita o bo'lgani uchun 2 qaytaradi funksiyamz!

// 📌 funksiyamizni npm run train kamandasi orqali ishga tushirb olamz!