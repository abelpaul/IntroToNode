let sum = 0;
function average(scores) {
    for(let i = 0; i<scores.length; i++){
        sum += scores[i]
    }
    let avg = sum/scores.length;
    console.log(Math.floor(avg));
}

average([100,90]);