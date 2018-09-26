'use strict';

const Node = require('./Node');

module.exports = (body, test) =>
    Node('DoWhileStatement')({
        body,
        test
    });
