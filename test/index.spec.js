'use strict';

const chai = require('chai');
const { expect } = chai;

const forast = require('..');

describe('forast', () => {
    describe('nodes', () => {
        it('ArrayExpression', () => {
            expect(forast.nodes.ArrayExpression([ { type: 'Literal', value: 'foo' } ])).to.eql({
                elements: [
                    {
                        type: 'Literal',
                        value: 'foo'
                    }
                ],
                type: 'ArrayExpression'
            });
        });
        it('ArrowFunctionExpression', () => {
            expect(forast.nodes.ArrowFunctionExpression({ type: 'Identifier', name: 'v' }, [], true)).to.eql({
                type: 'ArrowFunctionExpression',
                generator: false,
                expression: true,
                params: [],
                body: {
                    type: 'Identifier',
                    name: 'v'
                }
            });
        });
        it('AssignmentExpression', () => {
            expect(forast.nodes.AssignmentExpression('=', { type: 'Identifier', name: 'v' }, { type: 'Literal', value: 'foo' })).to.eql({
                type: 'AssignmentExpression',
                operator: '=',
                left: { type: 'Identifier', name: 'v' },
                right: { type: 'Literal', value: 'foo' }
            });
        });
        it('BinaryExpression', () => {
            expect(forast.nodes.BinaryExpression('==', { type: 'Identifier', name: 'v' }, { type: 'Literal', value: 'foo' })).to.eql({
                type: 'BinaryExpression',
                operator: '==',
                left: { type: 'Identifier', name: 'v' },
                right: { type: 'Literal', value: 'foo' }
            });
        });
        it('BlockStatement', () => {
            expect(forast.nodes.BlockStatement([ { type: 'EmptyStatement' } ])).to.eql({
                type: 'BlockStatement',
                body: [ { type: 'EmptyStatement' } ]
            });
            expect(forast.nodes.BlockStatement({ type: 'EmptyStatement' })).to.eql({
                type: 'BlockStatement',
                body: [ { type: 'EmptyStatement' } ]
            });
        });
        it('CallExpression', () => {
            expect(forast.nodes.CallExpression({ type: 'Identifier', name: 'foo' }, [ { type: 'Literal', value: 'bar' } ])).to.eql({
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Literal', value: 'bar' } ]
            });
            expect(forast.nodes.CallExpression({ type: 'Identifier', name: 'foo' }, { type: 'Literal', value: 'bar' })).to.eql({
                type: 'CallExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Literal', value: 'bar' } ]
            });
        });
        it('ExpressionStatement', () => {
            expect(forast.nodes.ExpressionStatement({ type: 'UnaryExpression', argument: { type: 'Identifier', name: 'foo' }, prefix: false })).to.eql({
                type: 'ExpressionStatement',
                expression: { type: 'UnaryExpression', argument: { type: 'Identifier', name: 'foo' }, prefix: false }
            });
        });
        it('Identifier', () => {
            expect(forast.nodes.Identifier('v')).to.eql({
                type: 'Identifier',
                name: 'v',
                computed: false
            });
        });
        it('Literal', () => {
            expect(forast.nodes.Literal('abc')).to.eql({
                type: 'Literal',
                value: 'abc'
            });
            expect(forast.nodes.Literal(123)).to.eql({
                type: 'Literal',
                value: 123
            });
            expect(forast.nodes.Literal(true)).to.eql({
                type: 'Literal',
                value: true
            });
        });
        it('MemberExpression', () => {
            expect(forast.nodes.MemberExpression({ type: 'Identifier', name: 'foo' }, { type: 'Identifier', name: 'bar' })).to.eql({
                type: 'MemberExpression',
                object: { type: 'Identifier', name: 'foo' },
                property: { type: 'Identifier', name: 'bar' },
                computed: false
            });
        });
        it('NewExpression', () => {
            expect(forast.nodes.NewExpression({ type: 'Identifier', name: 'foo' }, [ { type: 'Identifier', name: 'bar' } ])).to.eql({
                type: 'NewExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Identifier', name: 'bar' } ]
            });
            expect(forast.nodes.NewExpression({ type: 'Identifier', name: 'foo' }, { type: 'Identifier', name: 'bar' })).to.eql({
                type: 'NewExpression',
                callee: { type: 'Identifier', name: 'foo' },
                arguments: [ { type: 'Identifier', name: 'bar' } ]
            });
        });
        it('Node');
        it('ObjectExpression');
        it('Program');
        it('Property');
        it('RegExpLiteral');
        it('ReturnStatement');
        it('SequenceExpression');
        it('ThisExpression');
        it('UnaryExpression');
        it('UpdateExpression');
        it('VariableDeclaration');
        it('VariableDeclarator');
    });
});
