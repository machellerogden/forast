'use strict';

const Node = require('./Node');

module.exports = (object, body) =>
    Node('WithStatement')({
        object,
        body
    });
