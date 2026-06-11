const numbers=[4,5,6,7]
const sum =numbers.reduce(
    (acc, curr) => acc + curr,
    0
);

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

let b=9

function outer(){
    let a=80;
    function inner(){
        b++
        console.log(b)
    }
    return inner
}

const closure=outer()
closure()
closure()

