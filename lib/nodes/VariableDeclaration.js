'use strict';

const Node = require('./Node');

module.exports = (declarations, kind = 'var') =>
    Node('VariableDeclaration')({
        declarations: Array.isArray(declarations)
            ? declarations
            : [ declarations ],
        kind
    });
