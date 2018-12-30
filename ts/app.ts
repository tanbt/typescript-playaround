import { Util } from './util/doc';

interface NumberValue {
    value: number;
    description?: string,
    other?: string
}

export default class Calculator {

    static Sum(a: number, b: number): number {
        let c = a + b;
        return c;
    }

    static SumAbs(a: NumberValue, b: NumberValue) : number {
        let c = a.value + b.value;
        return c;
    }
}

let a: NumberValue = {
    value: 3,
    description: "sth"
};

let b: NumberValue = {
    value: 4,
    other: "other"
};

//----------------------------
Util.output(Calculator.SumAbs( a, b ));