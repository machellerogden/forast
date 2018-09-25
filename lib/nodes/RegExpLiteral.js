'use strict';

const Node = require('./Node');

module.exports = (pattern, flags) =>
    Node('RegExpLiteral')({
        type: 'Literal',
        value: new RegExp(pattern, flags),
        regex: {
            pattern,
            flags
        }
    });
