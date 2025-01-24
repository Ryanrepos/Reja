
const http = require("http");
const mongodb = require("mongodb");
const { error } = require("console");

let db;
//const connectionString = "mongodb+srv://Muhammadjon:muhammad06@cluster0.bxrbaic.mongodb.net/"
const connectionString = "mongodb+srv://Ryan:Muhammad06$@cluster0.akgs9zd.mongodb.net/Reja"
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
    console.log("MongoDB connection succeed");

    module.exports = client;

    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function(){
    console.log(`server is successfully running on port: ${PORT}, http://localhost:${PORT}`);
})
    }
});