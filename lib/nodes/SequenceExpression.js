'use strict';

module.exports = SequenceExpression;

function SequenceExpression(expressions) {
    if (arguments.length !== 1) throw new Error('SequenceExpression requires exactly 1 argument');

    const ast = {
        type: 'SequenceExpression',
        expressions: Array.isArray(expressions)
            ? expressions
            : [ expressions ]
    };

    return ast;
}
