
// let arr = [1,3,5,6,7];

// console.log("sum",)
// for(let i=0;i < arr.length;i++){
//     //let i=0;
// let sum = arr[i]+arr[i];
// if(sum===9){

// return arr[i]
// }else{
//     console.log("unsuccessful"); 
// }
// }



const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
const mergeSortedArrays = (arr1, arr2) => {
   let { length: l1 } = arr1;
   let { length: l2 } = arr2;
   while(l2){
      arr1[l1++] = arr2[--l2];
   };
   const sorter = (a, b) => a - b;
   arr1.sort(sorter);
};
mergeSortedArrays(arr1, arr2);
console.log("sorted array",arr1);

// output - [1,2,2,3,5,6]

let [a,b,c]=arr1;
console.log("result",a,b,c);

let res = [...arr1,...arr2]
console.log("res-",res);

// I/P: kalyani
// o/p: inaylak

let string ='kalyani';
let result = string.split("").reverse().join("")
console.log(result)

function reverseString(str) {
   var newString = "";
   for (var i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
}
reverseString('hello');


