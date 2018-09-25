'use strict';

const Node = require('./Node');

module.exports = (id, init) =>
    Node('VariableDeclarator')(init ? {
        id,
        init
    } : { id });
