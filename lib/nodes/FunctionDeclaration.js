'use strict';

const Node = require('./Node');

module.exports = (id) =>
    Node('FunctionDeclaration')({
        id
    });