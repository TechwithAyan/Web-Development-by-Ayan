console.log("Hey this is about DVO")

var a=6;
var b=9;
var c="Ayan";

let d=100;
d=d+1;

//In JavaScript we mostly use let and rarely use var//

//In JS var is globally scoped while let and const are block scoped//
{
    let d=7;
    console.log(d);
    //Gives d as 7 and not 100 as let is block scoped//
}
console.log(d);
//Gives 101 as its outside block code//

console.log(a + b)
console.log(typeof a , typeof b , typeof c)

//const a1=6;
//a1=a1+1;
//Not allowed as const value cant be changed//

let x="Ayan Rj";
let y=22;
let z=3.69;
let p=true;
let q=undefined;
let r=null;

console.log(x, y, z, p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

//typeof null is giiven as object in JS//

let o={
    name:"Ayan",
    "job code":69
}
console.log(o);
o.salary="1000 crores"
console.log(o);

