'use strict';

function printOddsSum(numbers) {

    const oddsSum=numbers.filter(number=>number%2===1)
        .map(odd=>odd*odd)
        .reduce((prv,next)=>{
            return prv+next;
        });
    return oddsSum;
}

exports.printOddsSum=printOddsSum;