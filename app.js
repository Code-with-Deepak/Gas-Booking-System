const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();

const datab = mysql.createConnection({
    host:'localhost',user:'root',password:'',database:'nodejs-login'
})
const publicDirectory = path.join(__dirname , './public')
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.set('view-engine','hbs');

datab.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL connected...")
    }
})

app.use('/', require('./routes/pages.js'));
app.use('/auth', require('./routes/auth.js'));

app.listen(3030,() => {
    console.log("type 'localhost:3030' on your browser")
})