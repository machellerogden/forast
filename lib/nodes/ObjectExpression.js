'use strict';

module.exports = ObjectExpression;

const { Node } = require('../Node');

function ObjectExpression(properties) {
    if (arguments.length !== 1) throw new Error('ObjectExpression requires exactly 1 argument');

    const ast = Node('ObjectExpression')({
        properties
    });

    return ast;
}
