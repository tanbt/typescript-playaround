/** @jsx Util.h */

import { Util } from './doc';

function log(e) {
    console.log(e.target.value);
}

export const oldNode = (
    <ul style="list-style: none;">
        <li className="item" onClick={() => alert('hi!')}>item 1</li>
        <li className="item">
            <input type="checkbox" checked={true} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);

export const newNode = (
    <ul style="list-style: none;">
        <li className="item item2" onClick={() => alert('hi!')}>item 1</li>
        <li style="background: red;">
            <input type="checkbox" checked={false} />
            <input type="text" onInput={log} />
        </li>
        {/* this node will always be updated */}
        <li forceUpdate={true}>text</li>
    </ul>
);
