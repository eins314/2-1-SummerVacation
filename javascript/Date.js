let myDate = new Date();
let myDate1= new Date("2024-07-05");
let myDate2= new Date("2024-07-05T19:55:19");
let myDate3= new Date(2024,7,11,15,11,15);
//년,월(0부터시작),일(0부터시작),시간,분,초,밀리초

console.log(myDate);
console.log(myDate1);
console.log(myDate2);
console.log(myDate3);
console.log(myDate3.getTime());
console.log(myDate3.getFullYear());