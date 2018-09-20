'use strict';

const cast = require('../cast');
const { compose } = require('needful');
const {
    Identifier,
    ArrowFunctionExpression,
    BinaryExpression
} = require('require-dir')('../nodes');

const MemberCall_Arrow = require('./MemberCall_Arrow');

module.exports = (member, object, operator, value) => MemberCall_Arrow(member, object,
    BinaryExpression(operator, Identifier('v'), cast(value)),
    [ Identifier('v') ]);
