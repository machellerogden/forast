'use strict';

const Node = require('./Node');

module.exports = (body, params = [], expression = true, generator = false) =>
    Node('ArrowFunctionExpression')({
        params: Array.isArray(params)
            ? params
            : [ params ],
        body,
        expression,
        generator
    });
