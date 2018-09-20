'use strict';

module.exports = BlockStatement;

function BlockStatement(body) {
    if (arguments.length !== 1) throw new Error('BlockStatement requires exactly 1 argument');

    const ast = {
        type: 'BlockStatement',
        body: Array.isArray(body)
            ? body
            : [ body ]
    };

    return ast;
}
