'use strict';

module.exports = AssignmentExpression;

const { Node } = require('../Node');

function AssignmentExpression(operator, left, right) {
    if (arguments.length !== 3) throw new Error('AssignmentExpression requires exactly 3 arguments');

    const ast = Node('AssignmentExpression')({
        left,
        operator,
        right
    });

    return ast;
}
