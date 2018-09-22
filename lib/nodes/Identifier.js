'use strict';

module.exports = Identifier;

const { Node } = require('../Node');

function Identifier(name, computed = false) {
    if (arguments.length <= 0) throw new Error('Identifier requires at least 1 argument');

    const ast = Node('Identifier')({
        name: typeof name === 'undefined'
            ? 'undefined'
            : name,
        computed
    });

    return ast;
}
