const CUT_OFF = 80;

function passChecker(score){
    return score>CUT_OFF?"합격":"불합격";
}

console.log(passChecker(90));