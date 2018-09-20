'use strict';

module.exports = AssignmentExpression;

function AssignmentExpression(operator, left, right) {
    if (arguments.length !== 3) throw new Error('AssignmentExpression requires exactly 3 arguments');

    const ast = {
        type: 'AssignmentExpression',
        left,
        operator,
        right
    };

    return ast;
}
