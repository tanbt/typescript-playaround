/**
 * This util is for working with HTML Document
 */

export class Util {
    static outputText(data: any) {
        const e = document.getElementById('output');
        e.innerHTML = data;
    }

    static outputElement(data: any) {
        const e = document.getElementById('output');
        e.appendChild(data);
    }

    static generate() {
        const a = (
            Util.h('ul', { className: 'list' },
                Util.h('li', {}, 'item 1'),
                Util.h('li', {}, 'item 2'),
            )
        )
        return a;
    }

    static h(type, props, ...children) {
        return { type, props, children };
    }

    static createElement(node) {
        if (typeof node === 'string') {
            return document.createTextNode(node);
        }
        const el = document.createElement(node.type);
        node.children
            .map(Util.createElement)
            .forEach(el.appendChild.bind(el));
        return el;
    }
}