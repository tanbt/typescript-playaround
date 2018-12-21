/**
 * This util is for working with HTML Document
 */

export class Util {
    static content = document.getElementById('output');

    static init() {
        const $reload = document.getElementById('reload');
        $reload.addEventListener('click', () => {
            Util.updateElement(Util.content, Util.getNode2(), Util.getNode1());
        });
    }

    static outputText(data: any) {
        Util.content.innerHTML = data;
    }

    static outputElement(data: any) {
        const e = document.getElementById('output');
        Util.content.appendChild(data);
    }

    static getNode1() {
        const a = (
            Util.h('ul', { className: 'list' },
                Util.h('li', {}, 'item 1'),
                Util.h('li', {}, 'item 2'),
            )
        )
        return a;
    }

    static getNode2() {
        const a = (
            Util.h('ul', { className: 'list' },
                Util.h('li', {}, 'item 1'),
                Util.h('li', {}, 'item 3'),
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

    static updateElement($parent, newNode, oldNode, index = 0) {
        if (!oldNode) {
            $parent.appendChild(
                Util.createElement(newNode)
            );
        } else if (!newNode) {
            $parent.removeChild(
                $parent.childNodes[index]
            );
        } else if (Util.changed(newNode, oldNode)) {
            $parent.replaceChild(
                Util.createElement(newNode),
                $parent.childNodes[index]
            );
        } else if (newNode.type) {
            const newLength = newNode.children.length;
            const oldLength = oldNode.children.length;
            for (let i = 0; i < newLength || i < oldLength; i++) {
                Util.updateElement(
                    $parent.childNodes[index],
                    newNode.children[i],
                    oldNode.children[i],
                    i
                );
            }
        }
    }

    static changed(node1, node2) {
        return typeof node1 !== typeof node2 ||
            typeof node1 === 'string' && node1 !== node2 ||
            node1.type !== node2.type
    }
}