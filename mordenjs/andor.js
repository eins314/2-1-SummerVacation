console.log(true&&true);        //&&일때 왼쪽값이 true면 오른쪽값값반환
console.log(true&&false);
console.log(false&&true);       //&&일때 왼쪽값이 false이면 왼쪽값 반환
console.log(false&&false);

console.log(true||true);        //||일때 왼쪽값이 true이면 왼쪽값 반환
console.log(true||false);
console.log(false||true);       //||일때 왼쪽값이 true이면 오른쪽값 반환
console.log(false||false);

console.log(null&&undefined);   //null
console.log(0||true);           //true
console.log('0'&&NaN);          //NaN
console.log({}||123);           //{}

function print(value){
    const message = value || 'HI';

    console.log(message);
}

print();
print("hello");