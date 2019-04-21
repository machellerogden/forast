'use strict';

const cast = require('../cast');
const { ExpressionStatement, ConditionalExpression } = require('require-dir')('../nodes');
const { compose } = require('needful');

module.exports = (test, consequent, alternate) =>
    ExpressionStatement(ConditionalExpression(
        cast(test),
        cast(alternate),
        cast(consequent)));
