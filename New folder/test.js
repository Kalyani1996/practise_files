var express = require("express");
var app=express();
const PORT =  process.env.PORT || 7011;


app.get("/getdeatils",function(req,res){

    res.send("welcome to page");
})

app.listen(PORT, ()=>{

    console.log(`Started on port ${PORT}`);
});


let user = {
    name: "GFG",
    gfg1:() => {
      console.log("hello " + this.name); // no 'this' binding here
    }

}
user.gfg1();



// let res=str.split("").reverse().join("");
// console.log("result---",res);


function ReverseString(str) {
 
    // Check input
    // if(!str || str.length < 2 ||
    //         typeof str!== 'string') {
    //     return 'Not valid';
    // }
     
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
     
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
     
    // Joining the array elements
    return revArray.join('');
}
 
console.log(ReverseString("kalyani"))

//closure

//Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure(); 