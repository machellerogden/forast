'use strict';

const Node = require('./Node');

module.exports = (label = null) =>
    Node('ContinueStatement')({ label });
