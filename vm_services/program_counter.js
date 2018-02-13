const incrementProgramCounter = internalState => {
    internalState[2] = internalState[2] + 1
}

module.exports = incrementProgramCounter