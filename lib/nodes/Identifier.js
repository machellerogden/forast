'use strict';

const Node = require('./Node');

module.exports = (name, computed = false) =>
    Node('Identifier')({
        name: typeof name === 'undefined'
            ? 'undefined'
            : name,
        computed
    });
