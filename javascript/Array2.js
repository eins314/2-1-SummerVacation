let Ranking = [
    'BMW',
    'Benz',
    'KIA',
    'Hyundai'
];

//배열의 첫 요소를 삭제: shift()
Ranking.shift();
console.log(Ranking);
//Ranking.splice(0,1);


//배열의 마지막 요소를 삭제: pop()
Ranking.pop();
console.log(Ranking);
//Ranking.splice(Ranking.length-1,1);

//배열의 첫 요소로 값 추가: unshift(value)
Ranking.unshift("Honda");
console.log(Ranking);
//Ranking.splice(0,0,"Audi");

//배열의 마지막 요소로 값 추가: push(value)
Ranking.push("Genesis");
console.log(Ranking);
//Ranking.splice(Ranking.length, 0, "Ford");