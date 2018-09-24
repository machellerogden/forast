'use strict';

const Node = require('./Node');

module.exports = (callee, args) =>
    Node('CallExpression')({
        callee,
        arguments: Array.isArray(args)
            ? args
            : [ args ]
    });
