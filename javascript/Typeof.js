console.log(typeof 1);              //number
console.log(typeof 1.0);            //number
console.log(typeof "string");       //number

let name = "codeit";                
function sayHello(){
    console.log("Hello");
};

console.log(typeof name);           //string
console.log(typeof sayHello);       //function

console.log(typeof "Hello"+"Hi");   //string Hi            typeof의 반환값은 string이므로 string+Hi가 됨
console.log(typeof 8-3);            //NaN (Not a Number)   typeof의 우선순위가 더 높음
