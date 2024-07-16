function printArgue(a,b,c){
    for(const arg of arguments){
        console.log(arg);
    }
    console.log('---------------');
}

printArgue("Toung","Mark","Grey");
printArgue("Kony");
printArgue("Jack","Daniel","Scott","Brian");