console.log("Web serverni boshlash");

const { log } = require("console");

// 📌📌📌  EXPRESS  📌📌📌

const express = require("express");
const app = express();   // instance yasab olamz, express dan foydalanish uchun!
const res = require("express/lib/response");

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else {
        user = JSON.parse(data)
    }
});


// 📌 MongoDB chaqirish..

const db = require("./server").db()
const mongodb = require("mongodb");


// 1: 📌 Intro code
app.use(express.static("public"));
app.use(express.json());    // serverdan kelayotdan datani json formatga o'tkazib beradi!
app.use(express.urlencoded({extended: true}));  // kelayotdan data ni parse qilib beradi!

// 2: 📌 Session code

// 3: 📌 Views code
app.set("views", "views");  // ikkinchida kelgan views bu folder nomi.
app.set("view engine", "ejs");   // ejs ni ishlatyabmz view engine sifatida.

// 4: 📌 Routing code

app.post("/create-item", (req, res) => {
    console.log(req.body);
    console.log("user entered /create-item");
    const new_reja = req.body.reja;    
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

// Deleting item
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
        res.json({state: "success"});
    }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input}}, 
    function(err, data) {
        res.json({state: "success"});
    }
    );
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "Hamma rejalar o'chirildi"});
        });
    }
});

app.get("/", function(req, res){
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else{
            console.log(data);
            res.render("reja", {items: data});
        }
    })
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

module.exports = app;


// Yuqorida Express orqali web server qurib oldik!
// EJS orqali backend ichida frontend ni qurib olamz!

// 📌 Nodemon -- bu package kodda o'zgarish bo'lsa serverni qayta ishga tushiradi!
// npm start => faqat start script bo'lsagina run beradi.
// npm run start => start dan boshqa script lar bo'lsa masalan: dev, bu holatda npm run dev ishlatamz!

// 📌 GET - database dan ma'lumotni olish uchun GET ishlatiladi.
// 📌 POST - ma'lumotni o'zi bilan olib keladi va database ga o'sha ma'lumotni yozadi.
