class User{
    constructor (email,birthdate) {
        this.email=email;
        this.birthdate= birthdate;
    }

    buy(item){
        console.log(`${this.email} buys ${item.name}`);
    }
}

class PremiumUser extends User{
    constructor(email, birthdate, level){
        super(email,birthdate);
        this.level=level;
    }

    buy(item){
        console.log(`${this.email} buys ${item.name} with 5% discount`);
    }

    streamMusicForFree(){
        console.log(`Free music streaming for ${this.email}`);
    }
}

const item={
    name: `스웨터`,
    price: 30000,
}

const user1=new User('sam@gmail.com','1993-02-04');
const pUser1=new PremiumUser('Chirs@gmail.com','1992-04-23',3);

user1.buy(item);
pUser1.buy(item);