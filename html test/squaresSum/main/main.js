'use strict';


function printSquaresSum(numbers) {
    const oddArrays=buildOddArrays(numbers);
    const oddSquares=buildSquares(oddArrays);
    const squareSum=buildSquareSum(oddSquares);

    console.log(squareSum);
}

function buildOddArrays(numbers){
    let oddArrays=[];
    numbers.forEach(key=>{
        if(key%2!=0){
            oddArrays.push(key);
        }
    });
    return oddArrays;

    return numbers.map(number=>{
        if(number%2!=0)
            oddArrays.push(key);
    });
}

function buildSquares(oddArrays) {
    const oddSquares=[];
    let square=0;
    for(let i=0;i<oddArrays.length;i++){
        square=oddArrays[i]*oddArrays[i];
        oddSquares[i]=square;
    }
    return oddSquares;
}


function buildSquareSum(oddSquares) {
    let squareSum=0;
    for(const addSquare of oddSquares){
        squareSum+=addSquare;
    }
    return squareSum;
}

module.exports=printSquaresSum;
