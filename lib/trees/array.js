'use strict';

const cast = require('../cast');
const { partial, compose } = require('needful');

const {
    ExpressionStatement,
    ArrowFunctionExpression,
    AssignmentExpression,
    BinaryExpression,
    ReturnStatement,
    BlockStatement,
    Identifier
} = require('require-dir')('../nodes');

const MemberCall = require('../abstract/MemberCall');
const MemberCall_Unary = require('../abstract/MemberCall_Unary');
const MemberCall_Arrow_Binary = require('../abstract/MemberCall_Arrow_Binary');

exports.Filter = partial(MemberCall_Arrow_Binary, 'filter');
exports.Every = partial(MemberCall_Arrow_Binary, 'every');
exports.Some = partial(MemberCall_Arrow_Binary, 'some');
exports.Find = partial(MemberCall_Arrow_Binary, 'find');

exports.Map = partial(MemberCall_Arrow_Binary, 'map');
exports.FlatMap = partial(MemberCall_Arrow_Binary, 'flatMap');

exports.Join = partial(MemberCall_Unary, 'join');

const Reduce = exports.Reduce = (arr, acc, accRight) => {
    return MemberCall('reduce', cast(arr), [
        ArrowFunctionExpression(BlockStatement([
                ExpressionStatement(
                    AssignmentExpression(
                        '=',
                        Identifier('acc'),
                        accRight)),
                ReturnStatement({
                    type: "Identifier",
                    name: "acc"
                })
            ]),
        [ Identifier('acc'), Identifier('v') ],
        false),
        cast(acc)
    ]);
};

exports.Sum = (arr) => Reduce(arr, 0, BinaryExpression('+', Identifier('acc'), Identifier('v')));
exports.Product = (arr) => Reduce(arr, 1, BinaryExpression('*', Identifier('acc'), Identifier('v')));
