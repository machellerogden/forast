'use strict';

const Node = require('./Node');

module.exports = (callee, args) =>
    Node('NewExpression')({
        callee,
        arguments: Array.isArray(args)
            ? args
            : [ args ]
    });
