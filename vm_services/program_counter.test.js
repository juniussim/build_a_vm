const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const incrementProgramCounter = require('./program_counter')

describe('Program Counter Services', () => {
    incrementProgramCounter(internalState)
    
    test('incrementProgramCounter increments instruction address by 1', () => {
        expect(internalState[2]).toBe(1);
    });
});


