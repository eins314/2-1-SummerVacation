let string = "Hello my friend";

//부분 문자열 접근
console.log(string.slice(0,2));
console.log(string.slice(3));
console.log(string.slice());

//양끝 공백제거
console.log(string.trim());

//대소문자 변환
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//요소 접근
console.log(string[3]);
console.log(string.charAt(3));

//요소 탐색
console.log(string.indexOf("e"));
console.log(string.lastIndexOf("e"));