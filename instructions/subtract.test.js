const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const subtract = require('./subtract')
const loadWord = require('./load_word')

describe('Subtract', () => {    
    test('register A and register B and store result in register A', () => {
        loadWord(1, 16, externalMemory, internalState)
        loadWord(2, 18, externalMemory, internalState)
        subtract(1, 2, externalMemory, internalState)
        expect(internalState[0]).toBe(256);
    });
});