'use strict';

const Node = require('./Node');

module.exports = (body, sourceType = 'script') =>
    Node('Program')({
        body: Array.isArray(body)
            ? body
            : [ body ],
        sourceType
    });
