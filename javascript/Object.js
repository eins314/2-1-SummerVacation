let object = {
    name: "강도훈",
    bornYear: 2020, 
    'isVerynice': true,
    feeling: "bad",
    mycar:{
        title: "bmw",
        ps:252
    }
};

console.log(object.bornYear);
console.log(object['isVerynice']);
console.log(object.mycar.title);

console.log(object.ceo);
object.ceo='max';
console.log(object.ceo);

console.log(object.feeling);
delete object.feeling;
console.log(object.feeling);

console.log(object.name!== undefined); //객체안에 name이 있는지 확인 있으면 true
console.log("name" in object);         //객체안에 name이 있는지 확인 있으면 true