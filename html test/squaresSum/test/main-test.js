'use strict';
describe('squareSum',()=>{

    let numberArray=[];
    let oddArrays=[];
    let oddSquares=[];
    beforeEach(()=>{
        numberArray=[1,2,3,4,5];
    });

    beforeEach(()=>{
        oddArrays=[1,3,5];
    });

    beforeEach(()=>{
        oddSquares=[1,9,25];
    });

    it('print squareSum',()=>{
        spyOn(console, 'log');
        printSquaresSum(numberArray);
        let expectSum=35;
        expect(console.log).toHaveBeenCalledWith(expectSum);
    });

    it('print oddArrays',()=>{
        let oddArrays=buildOddArrays(numberArray);
        let expectOddArrays=[1,3,5];

        expect(oddArrays).toEqual(expectOddArrays);
    });

    it('print oddSquares',()=>{
        let oddSquares=buildSquares(oddArrays);
        let expectoddSquares=[1,9,25];

        expect(oddSquares).toEqual(expectoddSquares);
    });

    it('print sum',()=>{
        let squareSum=buildSquareSum(oddSquares);
        let expectSquareSum=35;

        expect(squareSum).toEqual(expectSquareSum);
    });
});

