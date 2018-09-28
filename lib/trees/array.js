'use strict';

const cast = require('../cast');
const { partial } = require('needful');
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

exports.Filter = partial(MemberCall_Arrow_Binary, 'filter');
exports.Every = partial(MemberCall_Arrow_Binary, 'every');
exports.Some = partial(MemberCall_Arrow_Binary, 'some');
exports.Find = partial(MemberCall_Arrow_Binary, 'find');
exports.Map = partial(MemberCall_Arrow_Binary, 'map');
exports.FlatMap = partial(MemberCall_Arrow_Binary, 'flatMap');
exports.Join = partial(MemberCall_Unary, 'join');
exports.Sum = (arr) => Reduce(arr, 0, BinaryExpression('+', Identifier('acc'), Identifier('v')));
exports.Product = (arr) => Reduce(arr, 1, BinaryExpression('*', Identifier('acc'), Identifier('v')));
