'use strict';

const Node = require('./Node');

module.exports = (argument) =>
    Node('ThrowStatement')({
        argument
    });