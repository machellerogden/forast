'use strict';

const Node = require('./Node');

module.exports = (operator, left, right) =>
    Node('LogicalExpression')({
        operator,
        left,
        right
    });