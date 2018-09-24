'use strict';

const Node = require('./Node');

module.exports = (body) =>
    Node('BlockStatement')({
        body: Array.isArray(body)
            ? body
            : [ body ]
    });
