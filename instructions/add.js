// Add register A and Register B and store the value in register A
const add = (register_A, register_B, externalMemory, internalState) => {
    internalState[register_A - 1] = internalState[register_A - 1] + internalState[register_B - 1]
}

module.exports = add