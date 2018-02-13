const internalState = require('./internal_state')
const fetch = require('./vm_services/fetch')
const decode = require('./vm_services/decoder')

// Virtual Machine Program Flow
// step 1: fetch the current instruction
// step 2: decode the instrcution
// step 3: execute the decoded instruction
// repeat

const vm = externalMemory => {
    console.log('internals:',internalState)
    const currentInstruction = fetch(externalMemory, internalState)
    const decodedInstruction = decode(currentInstruction)
    if (decodedInstruction) {
        const firstOperand = fetch(externalMemory, internalState)
        const secondOperand = fetch(externalMemory, internalState)
        decodedInstruction(firstOperand, secondOperand, externalMemory, internalState)
        return vm(externalMemory)
    } else {
        return null
    }
}

module.exports = vm