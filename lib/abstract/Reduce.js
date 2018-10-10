'use strict';

const cast = require('../cast');

const {
    ExpressionStatement,
    ArrowFunctionExpression,
    AssignmentExpression,
    ReturnStatement,
    BlockStatement,
    Identifier
} = require('require-dir')('../nodes');

const MemberCall = require('../abstract/MemberCall');

module.exports = (arr, accRight, acc) =>
    MemberCall('reduce', cast(arr), [
        ArrowFunctionExpression(BlockStatement([
                ExpressionStatement(
                    AssignmentExpression(
                        '=',
                        Identifier('acc'),
                        accRight)),
                ReturnStatement({
                    type: 'Identifier',
                    name: 'acc'
                })
            ]),
        [ Identifier('acc'), Identifier('v') ],
        false),
        cast(acc)
    ]);
