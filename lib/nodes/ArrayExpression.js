'use strict';

const Node = require('./Node');

module.exports = (elements) =>
    Node('ArrayExpression')({
        elements: Array.isArray(elements)
            ? elements
            : [ elements ]
    });
