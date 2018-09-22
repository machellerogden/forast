'use strict';

const AstNode = Symbol('ast-node');

exports.Node = (type) => (args) => ({ ...args, type, [AstNode]: true });

exports.isNode = (node) => typeof node === 'object' && node[AstNode];
