let year=2024;
let month=7;
let day=10;

console.log("생년월일은 "+year+"년 "+month+"월 "+day+ "일 ");
console.log(`생년월일은 ${year}년 ${month}월 ${day}일`);

let mynum=2;
function getTwice(x){
    return x*2;
}

console.log(`${mynum}의 두배는 ${getTwice(mynum)}`);

console.log(null==undefined);   //true
console.log(null===undefined);  //false