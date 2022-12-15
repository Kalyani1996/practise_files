var myString = "kaly@ni!#$5";


// Create a variable to contain the array
var number =myString.replace(/[0-9]/g,"");
console.log("number---------",number);

var character =myString.replace(/[@,#,!,$,[0-9]/g,"");
console.log("charater---------",character);

var specialcharacter =myString.replace(/[a-z]/g,"");
console.log("specialcharater---------",specialcharacter);
// Use the string.split function to split the string
// using the whitespaces as a criteria for splitting the string
// for(i = 0; i < myString.length; i++)
//            {
//             var mySplitResult = myString.charAt().match(/[a-zA-Z]/);
//   console.log("<br /> Element " + i + " of the array is: " + mySplitResult[i]);
//            }



//reverse string

// var res= myString.split("").reverse().join("");
// console.log("ress---------",res);

function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse("adam")
console.log(sss);


//star pattern

for (i = 1; i <= 5; i = i + 1) {
    let str = "";
    for (j = 0; j < i; j = j + 1) {
      str += "*";
    }
    console.log(str);
  }

  const printPattern = (count, symbol) => {
    for (let i = 1; i <= count; i++) {
      console.log(symbol.repeat(i));
    }
  };
  
  printPattern(5, '*');
           

  for (i = 1; i <= 5; i = i + 1) {
    let str = "";
    for (j = 1; j < i; j = j + 1) {
      str += j;
    }
    console.log(str);
  }

  for (i = 1; i <= 10;i++) {
console.log("numbers",i);

}


//sum of num

let arr = [5, 10, 15, 20];
let sum = arr.reduce(function (a, b) {
  return a + b;
}, 0); // with initial value to avoid when the array is empty

console.log(sum); // Output: 50
          
let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });

	p1 = Promise.resolve(50);
	p2 = 200
	p3 = new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, 'geek');
	});

	Promise.all([p1, p2, p3]).then(function(values) {
		console.log(values);
	});


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
     console.log("data");
     let data = [10,30,20,50,60,70]
     let [a,b,...c] = data   //spreadoperator
     console.log(c)


     // es6 rest operator parameter
function fun(...input){
	let sum = 0;
	for(let i of input){
		sum+=i;
	}
	return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15				



     let aa = ['abc','str','xyx'];
    //  aa.push('azs');
     var st = aa.pop();
     console.log("array---------",aa);
     console.log("st---------",st);

     var str ="kalyaani";
     var res= str.split("").reverse().join("");
     console.log("res",res);


     a=20;
     b=a;
     a=30;
     console.log("a-----------",a);
     
     console.log("b-----------",b);

    //  <script> SELECT Customers.CustomerName, Orders.OrderID
    //  FROM Customers
    //  LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
    //  ORDER BY Customers.CustomerName;
     
    //  SELECT Customers.CustomerName, Orders.OrderID
    //  FROM Customers
    //  RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
    //  ORDER BY Customers.CustomerName;</script>
    
    let user = {
      name: "GFG",
      gfg1:() => {
        console.log("hello " + this.name); // no 'this' binding here
      },
      gfg2(){	
        console.log("Welcome to " + this.name); // 'this' binding works here
      }
    };
    user.gfg1();
    user.gfg2();
    
    //regular function (argument object available )
    let user1 = {	
      show(){
        console.log(arguments);
      }
    };
    user1.show(1, 2, 3);

//arrow function

    let user2 = {	
      show:()=>{
        console.log(...arguments);
      }
    };
    user2.show(1, 2, 3);
    

    function add (req,res){

      return res;
    }

    function* genfunc(){
      yield 4;
      yield 3;
    }
    var res = genfunc();
    console.log("data",res.next());


    