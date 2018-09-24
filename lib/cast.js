'use strict';

module.exports = castValue;

const isNode = require('./isNode');
const nodes = require('require-dir')('./nodes');
const types = Object.keys(nodes);

const {
    Property,
    Literal,
    Identifier,
    ObjectExpression,
    ArrayExpression
} = nodes;

function castValue(given) {

    function cast(value) {
        if (typeof value === 'undefined') return Identifier('undefined');
        if ([ 'string', 'boolean', 'number' ].includes(typeof value) || value === null) return Literal(value);
        if (Array.isArray(value)) return ArrayExpression(value.map(cast));
        if (isNode(value)) return value;
        if (typeof value === 'object') return ObjectExpression(Object.entries(value).map(([ k, v ]) => Property(Identifier(k), cast(v))));
    }

    return cast(given);
}
