let Ranking = [
    'BMW',
    'Benz',
    'KIA',
    'Hyundai'
];

for(let i=0; i<Ranking.length; i++){
    console.log(Ranking[i]);
}

for(let i of Ranking){
    console.log(i);
}

for(let i in Ranking){              //배열에 사용하지 않도록 할 것.
    console.log(Ranking[i]);
}