'use strict';

const cast = require('../cast');
const requireDir = require('require-dir');

const {
    BinaryExpression,
    Identifier
} = requireDir('../nodes');

const {
    MemberCall_Unary,
    MemberCall_Arrow_Binary,
    Reduce
} = requireDir('../abstract');

exports.Filter = (operator, object, value) => MemberCall_Arrow_Binary('filter', object, operator, value);
exports.Every = (operator, object, value) => MemberCall_Arrow_Binary('every', object, operator, value);
exports.Some = (operator, object, value) => MemberCall_Arrow_Binary('some', object, operator, value);
exports.Find = (operator, object, value) => MemberCall_Arrow_Binary('find', object, operator, value);
exports.Map = (operator, object, value) => MemberCall_Arrow_Binary('map', object, operator, value);
exports.FlatMap = (operator, object, value) => MemberCall_Arrow_Binary('flatMap', object, operator, value);
exports.Join = (...args) =>
    args.length == 2
        ? MemberCall_Unary('join', args[1], args[0])
        : MemberCall_Unary('join', args[0], '');
exports.Sum = (arr) => Reduce(arr, BinaryExpression('+', Identifier('acc'), Identifier('v')), 0);
exports.Product = (arr) => Reduce(arr, BinaryExpression('*', Identifier('acc'), Identifier('v')), 1);
