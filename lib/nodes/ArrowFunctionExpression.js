'use strict';

module.exports = ArrowFunctionExpression;

const { Node } = require('../Node');

function ArrowFunctionExpression(body, params = [], expression = true) {
    if (arguments.length <= 0) throw new Error('ArrowFunctionExpression requires at least 1 argument');

    const ast = Node('ArrowFunctionExpression')({
        params: Array.isArray(params) ? params : [ params ],
        body,
        expression
    });

    return ast;
}
