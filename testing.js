var express =require("express");
var app=express();

var port=process.env.port ||8003

app.get("/getderails",(req,res)=>{

    res.send("success");

});

app.listen(port,(res)=>{
    console.log(`${port} listen successfully`);

});


let data={
    names:"kallu",
    get1:()=>{
        console.log("getdata" + this.names);
    },
    get2(){
        console.log("getdata" + this.names);
    }
}
data.get1();
data.get2();


// //regular function (argument object available )
// let user1 = {	
//     show(){
//       console.log(arguments);
//     }
//   };
//   user1.show(1, 2, 3);

// //arrow function

//   let user2 = {	
//     show:()=>{
//       console.log(...arguments);
//     }
//   };
//   user2.show(1, 2, 3);
  


  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
 }
 reverseString('hello');



 var arrr =[20,3,45,67,89,23];
 var arrr2 =[10,30,40];


 let [a,b,...c]= arrr
 console.log("arr",arrr);
 let res= [...arrr,...arrr2]
 console.log("res",res);



 var promise = new Promise(function(resolve,reject){
    try{
    resolve(123);
}catch{
    reject("error")
}
 });

 console.log(promise);


    p1 = Promise.resolve(50);
	p2 = 200
	p3 = new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, 'geek');
	});

	Promise.all([p1, p2, p3]).then(function(values) {
		console.log(values);
	});

    var globalVariable = "Hello world";

    function sendMessage(){
      return globalVariable; // can access globalVariable since it's written in global space
    }
    function sendMessage2(){
      return sendMessage(); // Can access sendMessage function since it's written in global space
    }
    sendMessage2();  // Returns “Hello world”



    
    function x() {
        return 'Hello'
     }
     
     
     function y() {
        return 'Hello'
     }
     
     async function z() {
       await x()
       await y()
     }

     function divideByHalf(sum){
        console.log(sum * 3);
      }
      
      function multiplyBy2(sum){
        console.log(sum * 2);
      }
      
      function operationOnSum(num1,num2,operation){
        var sum = num1 + num2;
        operation(sum);
      }
      
      operationOnSum(3, 3, divideByHalf); // Outputs 3
      
      operationOnSum(5, 5, multiplyBy2); // Outputs 20


      var firstWord = "Deepak";
var secondWord = "Aman";

isAnagram("Deepak", "kallu"); // true

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}