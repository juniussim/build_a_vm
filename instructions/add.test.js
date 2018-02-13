const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const add = require('./add')
const loadWord = require('./load_word')

describe('Add', () => {    
    test('register A and register B and store result in register A', () => {
        loadWord(1, 16, externalMemory, internalState)
        loadWord(2, 18, externalMemory, internalState)
        add(1, 2, externalMemory, internalState)
        expect(internalState[0]).toBe(768);
    });
});