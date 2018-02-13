// All values are in hexadecimal encoding
const memory = [
    1,  // load word
    2,  // register B
    16, // from input 1 (address in memory)
    1,  // load word
    1,  // register A
    18, // from input 2 (address in memory)
    4,  // add
    1,  // register A
    2,  // register B
    2,  // store word
    1,  // register A
    15, // output (address in memory)
    256, // Halt
    0, // does nothing
    0, // Output
    0,
    2, // Input 1
    1,
    2, // Input 2
    2
]

module.exports = memory