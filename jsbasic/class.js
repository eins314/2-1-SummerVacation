class User{
    constructor (email,birthdate) {
        this.email=email;
        this.birthdate= birthdate;
    }


        buy(item){
            console.log(`${this.email} buys ${item.name}`);
        }

}

const item = {
    name: '블레이저',
    price: 300000,
};

const user1 = new User('chris123@gmail.com','1992-02-13');

console.log(user1.email);

user1.buy(item);