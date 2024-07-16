function printRank(first,second,...others){
    console.log(`first:${first}`);
    console.log(`second:${second}`);
    for(const arg of others){
        console.log(`attendence:${arg}`);
    }
}

printRank("jason","kony","krong","tony","max");