'use strict';

const Node = require('./Node');

module.exports = (argument) =>
    Node('ReturnStatement')({
        argument
    });
