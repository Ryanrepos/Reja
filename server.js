console.log("Web serverni boshlash");

// 📌📌📌  EXPRESS  📌📌📌

const express = require("express");
const app = express();   // instance yasab olamz, express dan foydalanish uchun!
const http = require("http");

// 1: 📌 Intro code
app.use(express.static("public"));
app.use(express.json());    // serverdan kelayotdan datani json formatga o'tkazib beradi!
app.use(express.urlencoded({extended: true}));

// 2: 📌 Session code

// 3: 📌 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: 📌 Routing code
app.get("/hello", function(req, res){
    res.end(`<h1 style = "background: red">HELLO WORLD by Ryan</h1>`); 
});

app.get("/gift", function(req, res){
    res.end("<h1>siz sovg'alar bo'limidasiz</h1>"); 
});

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