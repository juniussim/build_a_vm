const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const loadWord = require('./load_word')

describe('Load word', () => {    
    test('loads input 1 from external memory into register A of internal state', () => {
        loadWord(1, 16, externalMemory, internalState)
        expect(internalState[0]).toBe(512);
    });
});