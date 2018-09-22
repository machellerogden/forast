'use strict';

module.exports = BinaryExpression;

const { Node } = require('../Node');

function BinaryExpression(operator, left, right) {
    if (arguments.length !== 3) throw new Error('BinaryExpression requires exactly 3 arguments');

    const ast = Node('BinaryExpression')({
        left,
        operator,
        right
    });

    return ast;
}
