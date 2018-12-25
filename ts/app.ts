import { Util } from './util/doc';
import { oldNode, newNode } from './util/demo-nodes';

interface NumberValue {
    value: number;
    description: string
}

export default class Calculator {

    static Sum(a: number, b: number): number {
        let c = a + b;
        return c;
    }

    static SumAbs(a: NumberValue, b: NumberValue): number {
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
    description: "sth else"
};

//----------------------------
Util.outputElement(Util.createElement(oldNode));

const $reload = document.getElementById('reload');
$reload.addEventListener('click', () => {
    //console.log(oldNode, newNode);
    Util.updateElement(Util.content, newNode, oldNode);
});