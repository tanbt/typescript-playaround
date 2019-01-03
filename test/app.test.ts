import {expect} from 'chai';
import Calculator from '../ts/app';

describe('calculator', () => {
    it('add', () => {
        let result = Calculator.Sum(2,3);
        expect(result).equal(5);
    });
});