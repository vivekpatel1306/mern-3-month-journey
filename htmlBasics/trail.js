// const a =
// Number(process.argv[2]);

// const b =
// Number(process.argv[3]);

// console.log(a+b);

// const a=7;
// console.log(typeof a)

// const a={
//     abc:"bhb",
//     greet:{
//         name:"vivek",
//         age:{

//             ah:{
//                 g:88
//             }
//         }
//     }
// }
// const b=structuredClone(a)
// b.abc="bn"
// console.log(a.abc)
// b.greet.name="sandihya"
// console.log(a.greet.name)
// b.greet.age.ah.g=46
// console.log(b.greet.age.ah.g)
// console.log(a.greet.age.ah)


// let name="vivek"
// const person = {
//   name: "John",
// greet(){

//     const show= () => {
//         console.log(this.name);
//     }
//     show();
// }
// };

// person.greet();

// const person = {
//   name: "John",

//   greet() {
//     const name="bh"
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// person.greet();

// const p={
// name:"vivek",
//   person : {
//     name: "John",
//     greet: () => {
//       console.log(this.name); 
//     }
//   }
// }

// p.person.greet(); // Output: undefined


var a = 9;
const promise = new Promise((resolve, reject) => {
  resolve(() => {
    setTimeout(() => {
      ab()
    })
    setTimeout(() => {
      ab()
    })
    setTimeout(() => {
      ab()
    })
  })
})
promise.then((run)=>{
  run()
})
function ab() {
  a++
  console.log(a)
}

console.log(a)
// for (var i = 1; i <= 3; i++) {
//   // setTimeout(() => {
//     {
//       console.log(i);
//     }
//   // }, 1000);
// }
