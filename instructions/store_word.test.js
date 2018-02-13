const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const add = require('./add')
const loadWord = require('./load_word')
const storeWord = require('./store_word')

describe('Store', () => {    
    test('should store values in register A into output', () => {
        loadWord(1, 16, externalMemory, internalState)
        loadWord(2, 18, externalMemory, internalState)
        add(1, 2, externalMemory, internalState)
        storeWord(1, 15, externalMemory, internalState)
        expect(externalMemory[15]).toBe(0);
        expect(externalMemory[16]).toBe(3);
    });
});
