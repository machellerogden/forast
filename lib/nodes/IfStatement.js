'use strict';

const Node = require('./Node');

module.exports = (test, consequent, alternate = null) =>
    Node('IfStatement')({
        test,
        consequent,
        alternate
    });
