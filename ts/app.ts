// import { Util } from './util/doc';
import {Generator} from './util/generator';

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
        let n = Generator.getId();
        n = n+999;
        let c = a.value + b.value + n;
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
// Util.output(Calculator.SumAbs( a, b ));
console.log(Calculator.SumAbs( a, b ));
console.log(Generator.getId());
console.log(Generator.getId());
console.log(Generator.getId());
Generator.reset()
console.log(Generator.getId());
console.log(Generator.getId());

