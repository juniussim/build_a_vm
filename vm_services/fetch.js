const incrementProgramCounter = require('./program_counter')

const fetchInstruction = (externalMemory, internalState) => {
    const currentInstruction = externalMemory[internalState[2]]
    incrementProgramCounter(internalState);
    return currentInstruction;
}

module.exports = fetchInstruction