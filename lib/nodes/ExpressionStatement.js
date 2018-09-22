'use strict';

module.exports = ExpressionStatement;

const { Node } = require('../Node');

function ExpressionStatement(expression) {
    if (arguments.length !== 1) throw new Error('ExpressionStatement requires exactly 1 argument');

    const ast = Node('ExpressionStatement')({
        expression
    });

    return ast;
}
