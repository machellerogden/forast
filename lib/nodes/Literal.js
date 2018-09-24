'use strict';

const Node = require('./Node');

module.exports = (value) =>
    Node('Literal')({
        value
    });
