var express = require ('express');
var app= express();

app.get("./getdata",(req,res)=>{
res.send("hello");
}) ;

app.post("./postdata",(req,res)=>{
res.send();
}) ;

app.listen("3008","Retrive data successfully");

