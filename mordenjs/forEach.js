const members = ['영훈','윤수','동욱','태호'];

for(let member of members){
    console.log(`${member}님이 입장하셨습니다.`);
}

members.forEach((member,index)=>{
    console.log(`${index} ${member}님이 입장하셨습니다.`);
});

