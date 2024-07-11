let Ranking = [
    'BMW',
    'Benz',
    'KIA',
    'Hyundai'
];

console.log(Ranking);
delete Ranking[1];
console.log(Ranking);

Ranking.splice(1,1,"Porsche","Redbull");    //(삭제할 인덱스, 이후 삭제할 인덱스 개수, 추가할 인덱스 )
console.log(Ranking);

Ranking.splice(1,0,"Porsche","Redbull");    //(삭제할 인덱스, 이후 삭제할 인덱스 개수, 추가할 인덱스 )
console.log(Ranking);