'use strict';

const Node = require('./Node');

module.exports = (expressions) =>
    Node('SequenceExpression')({
        expressions: Array.isArray(expressions)
            ? expressions
            : [ expressions ]
    });
