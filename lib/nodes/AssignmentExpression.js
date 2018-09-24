'use strict';

const Node = require('./Node');

module.exports = (operator, left, right) =>
    Node('AssignmentExpression')({
        left,
        operator,
        right
    });
