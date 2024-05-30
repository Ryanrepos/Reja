
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
/*
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

*/

/*
// 📌📌📌 MITASK-B

function hisoblang(abc) {
    var raqamlar = 0;

    for(let string of abc) {
        if(!isNaN(parseInt(string))) {
            raqamlar++;
        }
    }
    return raqamlar;
}

console.log(hisoblang("seund8j3b3"));  // Bu funksiyamiz 3 qaytaradi bu holatda

// RUN - npm run train

*/


/*

// 📌📌📌 MITASK-C

class Shop {
    constructor(olma, banan, uzum) {
      this.olma = olma;
      this.banan = banan;
      this.uzum = uzum;
    }
  
    qoldiq() {
      const now = new Date();
      console.log(`Hozir dokonda ${now.getHours()}:${now.getMinutes()}da ${this.olma}ta olma, ${this.banan}ta banan va ${this.uzum}ta uzum mavjud!`);
    }
  
    sotish(mahsulot, miqdor) {
      if (mahsulot === 'olma') {
        this.olma -= miqdor;
      } else if (mahsulot === 'banan') {
        this.banan -= miqdor;
      } else if (mahsulot === 'uzum') {
        this.uzum -= miqdor;
      } else {
        console.log('Noto‘g‘ri mahsulot nomi!');
        return;
      }
      console.log(`Siz ${miqdor}ta ${mahsulot} sotdingiz.`);
    }
  
    qabul(mahsulot, miqdor) {
      if (mahsulot === 'olma') {
        this.olma += miqdor;
      } else if (mahsulot === 'banan') {
        this.banan += miqdor;
      } else if (mahsulot === 'uzum') {
        this.uzum += miqdor;
      } else {
        console.log('Noto‘g‘ri mahsulot nomi!');
        return;
      }
      console.log(`Siz ${miqdor}ta ${mahsulot} qabul qildingiz.`);
    }
  }
  
  const shop = new Shop(10, 20, 30);
  shop.qoldiq();
  shop.sotish('olma', 5);
  shop.qabul('uzum', 10);
  shop.qoldiq();
  

//   RUN: npm run train

*/


/*

D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

/*
function hisoblang(stringA, stringB) {

  if (stringA.length !== stringB.length) {
    return false;
  }

  const a = stringA.toLowerCase();
  const b = stringB.toLowerCase();

  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");

  return sortedA === sortedB;

}

console.log(hisoblang("5000", "3000"));
console.log(hisoblang("laptop", "potpal"));

// RUN: npm run train

*/

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function ozgartirish(a){
  return a.split("").reverse().join("");
}

console.log(ozgartirish("notebook"));
console.log(ozgartirish("12345"));