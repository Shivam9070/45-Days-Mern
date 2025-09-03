alert("hello world");
function calci(score){
    if(score >= 90){
        return "A Grade";
    } else if(score >= 80){
        return "B Grade";
    } else if(score >= 70){
        return "C Grade";
    } else if(score >= 60){
        return "D Grade";
    } else {
        return "F Grade";
    }
}

console.log("score 95:" + calci(95));
console.log("score 85:" + calci(82));
console.log("score 75:" + calci(73));