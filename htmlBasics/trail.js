// const a =
// Number(process.argv[2]);

// const b =
// Number(process.argv[3]);

// console.log(a+b);

// const a=7;
// console.log(typeof a)

const a={
    greet:{
        name:"vivek",
        age:{

            ah:45
        }
    }
}
const b={...a}
b.greet.age.ah=46
console.log(b.greet.age.ah)
console.log(a.greet.age.ah)