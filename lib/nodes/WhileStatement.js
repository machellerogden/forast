'use strict';

const Node = require('./Node');

module.exports = (test, body) =>
    Node('WhileStatement')({
        test,
        body
    });