// All values are in hexadecimal encoding
const memory = [
    1,  // load word
    1,  // register A
    16, // from input 1 (address in memory)
    1,  // load word
    2,  // register B
    18, // from input 2 (address in memory)
    3,  // add
    1,  // register A
    2,  // register B
    2,  // store word
    1,  // register A
    15, // output (address in memory)
    256, // Halt
    0, // does nothing
    0, // Output
    0,
    0, // Input 1
    2,
    0, // Input 2
    1
]

module.exports = memory