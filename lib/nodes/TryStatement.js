'use strict';

const Node = require('./Node');

module.exports = (block, handler = null, finalizer = null) =>
    Node('TryStatement')({
        block,
        handler,
        finalizer
    });
