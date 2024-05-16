console.log("Web serverni boshlash");

const { log } = require("console");
// 📌📌📌  EXPRESS  📌📌📌

const express = require("express");
const app     = express();   // instance yasab olamz, express dan foydalanish uchun!
const res     = require("express/lib/response");
const http    = require("http");

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else {
        user = JSON.parse(data)
    }
});

// 1: 📌 Intro code
app.use(express.static("public"));
app.use(express.json());    // serverdan kelayotdan datani json formatga o'tkazib beradi!
app.use(express.urlencoded({extended: true}));  // kelayotdan data ni parse qilib beradi!

// 2: 📌 Session code

// 3: 📌 Views code
app.set("views", "views");  // ikkinchida kelgan views bu folder nomi.
app.set("view engine", "ejs");   // ejs ni ishlatyabmz view engine sifatida.

// 4: 📌 Routing code

/*
app.get("/hello", function(req, res){
    res.end(`<h1 style = "background: red">HELLO WORLD by Ryan</h1>`); 
});

app.get("/gift", function(req, res){
    res.end("<h1>siz sovg'alar bo'limidasiz</h1>"); 
});
*/

app.post("/create-item", (req, res) => {
    console.log((req.body));
    res.json({test: "success"});
});

app.get("/", function(req, res){
    res.render("harid");
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`server is successfully running on port: ${PORT}`);
});

// Yuqorida Express orqali web server qurib oldik!
// EJS orqali backend ichida frontend ni qurib olamz!

// 📌 Nodemon -- bu package kodda o'zgarish bo'lsa serverni qayta ishga tushiradi!
// npm start => faqat start script bo'lsagina run beradi.
// npm run start => start dan boshqa script lar bo'lsa masalan: dev, bu holatda npm run dev ishlatamz!

// 📌 GET - database dan ma'lumotni olish uchun GET ishlatiladi.
// 📌 POST - ma'lumotni o'zi bilan olib keladi va database ga o'sha ma'lumotni yozadi.
