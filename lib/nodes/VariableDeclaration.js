'use strict';

const Node = require('./Node');

module.exports = (declarations, kind = 'var') =>
    Node('VariableDeclaration')({
        declarations,
        kind
    });
