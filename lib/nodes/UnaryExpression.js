'use strict';

const Node = require('./Node');

module.exports = (operator, argument, prefix = true) =>
    Node('UnaryExpression')({
        operator,
        argument,
        prefix
    });