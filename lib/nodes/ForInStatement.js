'use strict';

const Node = require('./Node');

module.exports = (body, left, right) =>
    Node('ForInStatement')({
        body,
        left,
        right
    });