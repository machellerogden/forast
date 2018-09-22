'use strict';

module.exports = Literal;

const { Node } = require('../Node');

function Literal(value) {
    if (arguments.length !== 1) throw new Error('Literal requires exactly 1 argument');

    const ast = Node('Literal')({
        value
    });

    return ast;
}
