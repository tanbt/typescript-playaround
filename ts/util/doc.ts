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
        return { type, props: props || {}, children };
    }

    static createElement(node) {
        if (typeof node === 'string') {
            return document.createTextNode(node);
        }
        const el = document.createElement(node.type);
        Util.setProps(el, node.props);
        Util.addEventListeners(el, node.props);
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
            Util.updateProps(
                $parent.childNodes[index],
                newNode.props,
                oldNode.props
            );
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
            node1.type !== node2.type ||
            node1.props && node1.props.forceUpdate;
    }

    static setProp($target, name, value) {
        if (Util.isCustomProp(name)) {
            return;
        } else if (name === 'className') {
            $target.setAttribute('class', value);
        } else if (typeof value === 'boolean') {
            Util.setBooleanProp($target, name, value);
        } else {
            $target.setAttribute(name, value);
        }
    }

    static setProps($target, props) {
        Object.keys(props).forEach(name => {
            Util.setProp($target, name, props[name]);
        });
    }

    static setBooleanProp($target, name, value) {
        if (value) {
            $target.setAttribute(name, value);
            $target[name] = true;
        } else {
            $target[name] = false;
        }
    }

    static isCustomProp(name) {
        return Util.isEventProp(name) || name === 'forceUpdate';
    }

    static removeBooleanProp($target, name) {
        $target.removeAttribute(name);
        $target[name] = false;
    }
    static removeProp($target, name, value) {
        if (Util.isCustomProp(name)) {
            return;
        } else if (name === 'className') {
            $target.removeAttribute('class');
        } else if (typeof value === 'boolean') {
            Util.removeBooleanProp($target, name);
        } else {
            $target.removeAttribute(name);
        }
    }

    static updateProp($target, name, newVal, oldVal) {
        if (!newVal) {
            Util.removeProp($target, name, oldVal);
        } else if (!oldVal || newVal !== oldVal) {
            Util.setProp($target, name, newVal);
        }
    }

    static updateProps($target, newProps, oldProps = {}) {
        const props = (<any>Object).assign({}, newProps, oldProps);
        Object.keys(props).forEach(name => {
            Util.updateProp($target, name, newProps[name], oldProps[name]);
        });
    }

    static isEventProp(name) {
        return /^on/.test(name);
    }

    static extractEventName(name) {
        return name.slice(2).toLowerCase();
    }

    static addEventListeners($target, props) {
        Object.keys(props).forEach(name => {
            if (Util.isEventProp(name)) {
                $target.addEventListener(
                    Util.extractEventName(name),
                    props[name]
                );
            }
        });
    }

}