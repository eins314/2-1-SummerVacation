class User{
    constructor (email,birthdate) {
        this.email=email;
        this.birthdate= birthdate;
    }


    buy(item){
        console.log(`${this.email} buys ${item.name}`);
    }

    set email(address){
        if(address.includes('@')){
            this._email=address;
        }else{
            throw new Error('invalid email address');
        }
    }

    get email(){
        return `email address is ${this._email}`;
    }
}

const item = {
    name: '블레이저',
    price: 300000,
};

const user1 = new User('chris123@gmail.com','1992-02-13');
user1.email='wolfd@gmail.com';
console.log(user1.email);

