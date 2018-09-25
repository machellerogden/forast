'use strict';

const Node = require('./Node');

module.exports = (id, init = null) =>
    Node('VariableDeclarator')({
        id,
        init
    });
