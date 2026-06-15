// const numbers=[4,5,6,7]
// const sum =numbers.reduce(
//     (acc, curr) => acc + curr,
//     0
// );

// console.log(sum);

// const mapped=numbers.map(num=>num*5)
// console.log(mapped)
// const filtered=numbers.filter(num=>num>5)
// console.log(filtered)
// const reduced=numbers.reduce((acc,cur)=>acc*cur,1)
// console.log(reduced)
// console.log(numbers.sort((a, b) => a - b))

// let x;
// var a,b;
// a=b=5;
// if (a==b) {
//   x = { 8: "hi there" };
// }
// console.log(x[8]);

// const data={
//     name:"Vivek",
//     greet(){
//         return 
//     }
// }

// function outer(){
//     let a=1;
//     function inner(){
//         a++;
//         console.log(a)
//     }
//      return inner
// }
// const closures=outer();
// closures()
// closures()


// fetch("/user")
// .then(res=>{res.json()})
// .then(data=>{console.log(data)})
// .catch(error=>{console.log(error)})
// .finally(()=>{
//     console.log("Executed")
// })

// function greet(){
//     console.log("Hi vivek")
// }
// function fn(hi){
//  hi()
// }
// fn(greet)

// function outer(){
//     let a=0;
// function inner(){
//     a++
//     console.log(a)
// }
// return inner
// }
// const counter=outer()
// counter()
// counter()

// let b=9

// function outer(){
//     var a=80;
//     function inner(){
//         a++
//         console.log(a)
//     }
//     return inner
// }

// const closure=outer()
// closure()
// closure()

// const user = {
//   name: "Vivek",

//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet();

// function Person() {
//   let age = 0;

//   setInterval( ()=> {
//     this.age++;
//     console.log(this.age)
//   }, 1000);
// }


// function outer() {
//   console.log(this);

//   const inner = () => {
//     console.log(this);
//   };

//   inner();
// }

// outer();

// const count=0;
// function Counter() {
//   this.count = 0;

//   setInterval(() => {
//     this.count++;
//     console.log(this.count);
//   }, 1000);
// }

// new Counter();

// function Counter() {
//   this.count = 0;

//   setInterval(function () {
//     this.count++;
//     console.log(this.count);
//   }, 1000);
// }

// new Counter();

// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();

// console.log(counter.getCount());

function a(name){
this.name=name
}
a.prototype.say=function b(){
  console.log("first"+this.name)
}
const define=new a("vivek")
define.say() 

const 