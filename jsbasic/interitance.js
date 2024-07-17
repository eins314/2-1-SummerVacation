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

    streamMusicForFree(){
        console.log(`Free music streaming for ${this.email}`);
    }
}

const item={
    name: `스웨터`,
    price: 30000,
}

const pUser1=new PremiumUser('Chirs@gmail.com','1992-04-23',3);
console.log(pUser1.email);
console.log(pUser1.birthdate);
console.log(pUser1.level);
pUser1.buy(item);
pUser1.streamMusicForFree();