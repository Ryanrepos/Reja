
/*
    Call back function use cases:
        
        1. Asynchronous Operations
        2. Event Handling
        3. Array Methods
        4. Custom Functions

*/

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