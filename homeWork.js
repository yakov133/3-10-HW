//targil 1
let message = `{
    "name":"greeting",
    "message":"hello world",
    "email":"yakov133@gmail.com"
}`;
// message = JSON.parse(message);

//targil 2
// let data = `{
//     "cars":[
//             {
//                 "modal":"bmw",
//                 "prics":1234,
//                 "year":2012
//             },
//             {
//                 "modal":"volvo",
//                 "prics":100,
//                 "year":2020
//             },
//             {
//                 "modal":"citroen",
//                 "prics":15000,
//                  "year":2013
//             }
//         ],
//     "shipes":[
//             {
//                 "name":"sofia",
//                 "year":2010,
//                 "parked":"tel-aviv",
//                 "pic":"https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847__480.jpg"
//             },
//             {
//                 "name":"naomi",
//                 "year":2020,
//                 "parked":"nyc",
//                 "pic":"https://cdn.pixabay.com/photo/2013/06/08/04/17/ferry-boat-123059__340.jpg"
//             },
//             {
//                 "name":"jarken",
//                 "year":2021,
//                 "parked":"maiami",
//                 "pic":"https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117__340.jpg"
//             }
//         ]
// }`; 

// let tempShipes = JSON.parse(data);
// tempShipes.shipes.forEach(element => {
//     document.body.innerHTML +=`
//     <section>
//     <img src = "${element.pic}" style="width:500px;height:400px">
//     <p>name: ${element.name}</p>
//     <p>year: ${element.year}</p>
//     <p>parked: ${element.parked}</p>
//     </section>
//     <br>`
// });

//targil 3
let userName = document.getElementById("name");
let userEmail = document.getElementById("message");
let uesrMessage = document.getElementById("email");


const makeObj = ()=>{
    let temp = {
        name : userName.value,
        email : userEmail.value,
        message : uesrMessage.value
    };
    // A
    console.log(temp);
    // B
    console.log(JSON.stringify(temp));
} 

//targil 4
const makeObjToJson = JSON.stringify;

//targil 5
const makeJsonToObj = JSON.parse;

//targil 6
const multyByThree = (obj)=>{
    obj.age *= 3;
    return makeObjToJson(obj);
}
// console.log(multyByThree(obj));
    