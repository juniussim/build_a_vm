const externalMemory = require('../memory/external_memory_subtract')
const vm = require('../vm')

describe('Virtual Machine', () => {    
    test('should output the value 256', () => {
        vm(externalMemory)
        expect(externalMemory[15]).toBe(0);
        expect(externalMemory[16]).toBe(1);
    })
});