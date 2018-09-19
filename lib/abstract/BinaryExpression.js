'use strict';

const cast = require('../cast');
const { ExpressionStatement, BinaryExpression } = require('require-dir')('../nodes');
const { compose } = require('needful');

module.exports = (operator, left, right) => compose(ExpressionStatement, BinaryExpression)(operator, cast(left), cast(right));
