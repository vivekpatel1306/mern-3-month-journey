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

// function a(name){
// this.name=name
// }
// a.prototype.say=function b(){
//   console.log("first "+this.name)
// }
// const define=new a("vivek")
// define.say() 


// const watch=new  Promise((resolve,reject)=>{
//   const completed=true;
//   if (completed){
//     resolve("Done")
//   }
//   else{
//     reject("Not Done")
//   }
// })

// watch.then((msg)=>{
// console.log(msg)
// }).catch((error)=>{
//   console.log(error)
// })


// const data={
//   name:"vivek",
//   age:23

// }
// const datas={
//   salary:1000000,
//   age:23

// }

// data.__proto__=datas
// const d=new data;
// console.log(d.salary)

// greet()
// greet.apply(data,[20,"vivek"])

// console.log(greet)
// var greet=()=>{
//   console.log(`name : ${this.name} and age is : ${this.age}`)
// }


// function nameD(name){
//   return name
// }

// function data(d){
//   console.log(d)
// }
// data(nameD("vivek"))


// const arr=[1,2,3]
// const arr1=arr.map(a=>a*2)
// arr1.push(8)
// console.log(arr)
// console.log(arr1)

// console.log(arr2)
// console.log(arr)
// console.log( arr.filter(a=>a>1))
// console.log( arr.reduce((a,b)=>a+b))

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// multiply(4)(1)
// console.log(multiply(5)(2));


// function add(a){
//   console.log(a)
//   return function (b){
//     console.log(a)
//     return function(c){
//       console.log(a)
//     }
//   }
// }
// const closure=add(2)(3)
// // add(5)(2)
// closure()

 


import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = (userData, jwtToken) => {
    localStorage.setItem("token", jwtToken);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setToken(jwtToken);

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);

    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      setToken(token);

      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};