


'use strict';
const  major=require('../main/main.js');
describe('oddsSum',()=>{

    let digits=[];

    beforeEach(()=>{
        digits=[1,2,3,4,5]
    });

    it('print oddsSum',()=>{
        let oddsSum=major.printOddsSum(digits);
        let expectOddsSum=35;

        expect(oddsSum).toEqual(expectOddsSum);
    });
});