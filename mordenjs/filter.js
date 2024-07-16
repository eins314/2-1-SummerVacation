const devices = [
    { name: 'GalaxyNote', brand: 'Samsung' },
    { name: 'MacbookPro', brand: 'Apple' },
    { name: 'iPad', brand: 'Apple' },
    { name: 'GalaxyWatch', brand: 'Samsung' },
    { name: 'iMac', brand: 'Apple' },
    { name: 'GalaxyBuds', brand: 'Samsung' },
    { name: 'Gram', brand: 'LG' },
    { name: 'GalaxyBook', brand: 'Samsung' },
    { name: 'SurfacePro', brand: 'Microsoft' },
    { name: 'ZenBook', brand: 'Asus' },
    { name: 'MacbookAir', brand: 'Apple' },
];

const apples = devices.filter((el) => el.brand ==='Apple');

// const apples = devices.filter(function(el) {
//     return el.brand === 'Apple';
// });

console.log(apples);

const laptop=devices.find(function(el){
    return el.name === 'Gram';
});

console.log(laptop);