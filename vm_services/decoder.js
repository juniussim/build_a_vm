const { retrieveCurrentInstructionThenIncrement } = require('./program_counter')
const loadWord = require('../instructions/load_word')
const storeWord = require('../instructions/store_word')
const add = require('../instructions/add')
const subtract = require('../instructions/subtract')

const decode = (currentInstruction) => {
    switch(currentInstruction) {
        case 1:
            return loadWord
            break;
        case 2:
            return storeWord
            break;
        case 3:
            return add
            break;
        case 4:
            return subtract
            break;
        case 5:
            // halt
            return null
            break;
    }
}

module.exports = decode