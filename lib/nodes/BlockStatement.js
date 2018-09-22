'use strict';

module.exports = BlockStatement;

const { Node } = require('../Node');

function BlockStatement(body) {
    if (arguments.length !== 1) throw new Error('BlockStatement requires exactly 1 argument');

    const ast = Node('BlockStatement')({
        body: Array.isArray(body)
            ? body
            : [ body ]
    });

    return ast;
}
