'use strict';

const Node = require('./Node');

module.exports = (operator, left, right) =>
    Node('BinaryExpression')({
        left,
        operator,
        right
    });
