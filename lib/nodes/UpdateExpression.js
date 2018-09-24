'use strict';

const Node = require('./Node');

module.exports = (operator, argument, prefix = false) =>
    Node('UpdateExpression')({
        operator,
        argument,
        prefix
    });
