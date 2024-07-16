const macbook={
    title:'맥북프로',
    price:3690000,
    memory:'16gb',
    storage: '1TB',
    display: 'retina',
};

// const title = macbook.title;
// const price = macbook.price;
const {title:product, price}= macbook;

console.log(product);
console.log(price);