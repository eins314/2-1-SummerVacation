let i = [1,2,3];
let j = i.slice(); //복사하기 주소전달X


j.push(10);
console.log(i);
console.log(j);

let x = {name:"supra",ps: 1000};
let y = {};

for (let key in x){
    y[key]=i[key];
}

y.title="magnetic";
console.log(x);
console.log(y);

let k = {name:"supra",ps: 1000};
let p = Object.assign({},k);
p.title="lucky";
console.log(k);
console.log(p);