'use strict';

const Node = require('./Node');

module.exports = (label, body) =>
    Node('LabeledStatement')({
        label,
        body
    });
