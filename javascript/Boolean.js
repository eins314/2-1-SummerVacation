console.log(2>1);
console.log(1>2);
console.log(3>=2);  // 등호 =를 부등호 뒤에 써야함
console.log(4<=10); // 등호 =를 부등호 뒤에 써야함
console.log(3===3); //  C에서 ==랑 같은 의미
console.log(3!==3); //  C에서 !=랑 같은 의미
                    // 주의할 점 ==와 ===는 다름, ==는 형변환을 하기때문에 "5"와 숫자 5가 같다고 반환됨.



console.log("Hi"==="Hi");       //문자열도 비교가능
console.log("Hi"!=="Hello");    //문자열도 비교가능


console.log(true&&true); //and
console.log(true||false);//or

console.log(!true);   //true
console.log(!!false); //false