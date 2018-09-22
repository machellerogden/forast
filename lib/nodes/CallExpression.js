'use strict';

module.exports = CallExpression;

const { Node } = require('../Node');

function CallExpression(callee, args) {
    if (arguments.length <= 0) throw new Error('CallExpression requires at least 1 argument');

    const ast = Node('CallExpression')({
        callee,
        arguments: args
    });

    return ast;
}
