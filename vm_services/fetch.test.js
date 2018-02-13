const internalState = require('../internal_state')
const externalMemory = require('../memory/external_memory')
const fetchInstruction = require('./fetch')

test('Fetch retrieves the first instruction', () => {
    expect(fetchInstruction(externalMemory, internalState)).toBe(1);
});
