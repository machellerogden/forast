'use strict';

const Node = require('./Node');

module.exports = (properties) =>
    Node('ObjectExpression')({
        properties: Array.isArray(properties)
            ? properties
            : [ properties ]
    });
