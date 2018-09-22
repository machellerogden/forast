'use strict';

module.exports = SequenceExpression;

const { Node } = require('../Node');

function SequenceExpression(expressions) {
    if (arguments.length !== 1) throw new Error('SequenceExpression requires exactly 1 argument');

    const ast = Node('SequenceExpression')({
        expressions: Array.isArray(expressions)
            ? expressions
            : [ expressions ]
    });

    return ast;
}
