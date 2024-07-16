function getFullName(){
    return `${this.firstName} ${this.lastName}`;
}

const user={
    firstName:"Ted",
    lastName:"Chang",
    getFullName:getFullName,
};

const admin={
    firstName:"Alex",
    lastName:"King",
    getFullName:getFullName,
};

console.log(user.getFullName());
console.log(admin.getFullName());