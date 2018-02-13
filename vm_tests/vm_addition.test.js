const externalMemory = require('../memory/external_memory')
// const externalMemoryOne = require('./memory/external_memory_one')
const vm = require('../vm')

describe('Virtual Machine', () => {    
    test('should output the value 768 using base memory', () => {
        vm(externalMemory)
        expect(externalMemory[15]).toBe(0);
        expect(externalMemory[16]).toBe(3);
    });
});