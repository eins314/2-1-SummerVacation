class Math{
    static PI = 3.14;

    static getCircleArea(radius){
        return Math.PI * radius * radius;
    }
}

console.log(Math.PI);
console.log(Math.getCircleArea(5));