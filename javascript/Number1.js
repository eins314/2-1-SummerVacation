let pie = 3.14;

//toFixed 0~99
console.log(pie.toFixed(4));
console.log(typeof pie.toFixed(4));

console.log(Number(pie.toFixed(4)));
console.log(+pie.toFixed(4));

//toString(2~36),x진수로 변환
console.log(pie.toString(2));
console.log(pie.toString(8));
console.log(pie.toString(16));

console.log(10..toString(2));
console.log((10).toString(2));

let sum = 0.1+0.2;

console.log(Math.round(sum*10)/10);