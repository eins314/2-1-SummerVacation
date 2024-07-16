function createUser(email,birthdate){
    const user = {
        email,
        birthdate,
        buy(item){
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}

const item = {
    name: '블레이저',
    price: 300000,
};

const user1 = createUser('chris123@gmail.com','1992-02-13');

console.log(user1.email);

user1.buy(item);