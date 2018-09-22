'use strict';

const chai = require('chai');
const { expect } = chai;

const forast = require('..');

describe('forast', () => {
    describe('nodes', () => {
        it('ArrayExpression', () => {
            expect(forast.nodes.ArrayExpression([ { type: 'Literal', value: 'foo' } ])).to.eql({
                "elements": [
                    {
                        "type": "Literal",
                        "value": "foo"
                    }
                ],
                "type": "ArrayExpression"
            });
        });
        it('Identifier', () => {
            expect(forast.nodes.Identifier('v')).to.eql({
                "type": "Identifier",
                "name": "v",
                "computed": false
            });
        });
        it('ArrowFunctionExpression', () => {
            expect(forast.nodes.ArrowFunctionExpression({ type: 'Identifier', name: 'v' }, [], true)).to.eql({
                "type": "ArrowFunctionExpression",
                "generator": false,
                "expression": true,
                "params": [],
                "body": {
                    "type": "Identifier",
                    "name": "v"
                }
            });
        });
    });
});
