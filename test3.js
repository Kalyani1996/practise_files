
// import axios from "axios";

// class host {
//     constructor(){
//         this.url="http://localhost:3003"
//     }

//     async add (data,token){
//         let res = await axios.post(`${this.url}/api/getdata`,data,{

//             headers:{

//             }
//         })
//     }
// }


let data={
    name:"kalyani",
    age:23,
    city:"pune"
}

let res = fetch("https://localhost:3004/api/category",{

method:"POSt",
body:JSON.stringify(data),
headers:{
    "Content-Type": "application/json"
}
})
return res;