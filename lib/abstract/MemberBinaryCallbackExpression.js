'use strict';

const cast = require('../cast');
const { compose } = require('needful');
const {
    Identifier,
    ArrowFunctionExpression,
    BinaryExpression
} = require('require-dir')('../nodes');

const MemberCallExpression = require('./MemberCallExpression');

module.exports = (fn, subject, operator, value) => MemberCallExpression(fn, subject, [
        ArrowFunctionExpression(
            BinaryExpression(operator, Identifier('v'), cast(value)),
            [ Identifier('v') ]) ]);
