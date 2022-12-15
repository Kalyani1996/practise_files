// Convert 1D array to multidimensional array
// Input : var oneDarr=[1,2,3,4,5,6] for size- 3, 
// Output : [[1,2,3],[4,5,6]]
// for ex : size 1 output:[[1],[2],[3],[4],[5],[6]] : 
// size 2 output:[[1,2],[3,4],[5,6]] : 
// size 4 output:[[1,2,3,4],[5,6]] : 
// size 8(or more than length of input array)- Output: [[1,2,3,4,5,6]]



var onearr=[1,2,3,4,5,6];
let size = onearr.length-1;

let ff= onearr.slice(0,size)
console.log("ff---",ff)

let i=0;
let arr2=[];

let dd1=arr2.push(onearr);
console.log("dd1----",dd1);
console.log("arr2---",arr2)


let [a,b,c,...d] = onearr
console.log("d-----",d);
 

// if(size==1){
    // let res= onearr.
    // console.log("result=---",res);

// }
// console.log("res---",res)
// for(let i;i<=res;i--){
//     let result=arr2.push(onearr[i]);
//     console.log("result=---",result);
// }

// for(let i=res;i>=3;i--){
// var result = arr2.push(onearr[i])
// console.log("result---",result)
// }
// let dd=arr2.push(result);
// console.log("result---",dd)




// arr1.join('');

// let result=onearr;
// console.log("result---",result)
