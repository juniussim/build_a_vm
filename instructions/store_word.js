// Store word from register A into output_address in externalMemory
const storeWord = (register_address, output_address, externalMemory, internalState) => {
    const totalValue = internalState[register_address - 1]
    const totalHexValue = totalValue.toString(16)
    const rightByteValue = totalHexValue.slice(-2)
    const leftByteValue = totalHexValue.slice(0, -2)
    externalMemory[output_address] = parseInt(rightByteValue, 16)
    externalMemory[output_address + 1] = parseInt(leftByteValue, 16)
}

module.exports = storeWord