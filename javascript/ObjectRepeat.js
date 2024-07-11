let code = {
    name: "수서역",
    bornYear: 2020,
    feeling: "nice"
}

for(let key in code){
    console.log(key);   //객체의 프로퍼티 네임이 나옴
    console.log(code[key]); //프로퍼티 값들이 나옴
}