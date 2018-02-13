// Load word from selected input into selected register
const loadWord = (register_address, input_address, externalMemory, internalState) => {
    const rightByteValue = externalMemory[input_address]
    const leftByteValue = externalMemory[input_address + 1]
    const totalValue = leftByteValue * Math.pow(2,8) + rightByteValue
    internalState[register_address - 1] = totalValue
}

module.exports = loadWord