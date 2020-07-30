const myObj = { one : 1, two : 2, subOne : { sOne : 1.1, sTwo : 1.2 }, options : { set1: 1}};


const {options, options: {set1}} = myObj;
const {subOne, subOne : {sOne}} = myObj;

console.log(options);
console.log(set1);

console.log(subOne);
console.log(sOne);



