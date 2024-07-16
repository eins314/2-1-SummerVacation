const numbers = [1,3,5,7,9];

const some=numbers.some((el)=>el>5);

const every=numbers.every(function(el){
    return el>5;
});

console.log('some', some);
console.log('every',every);
