# Project: Building a Virtual Machine

- Write a program that simulates the behavior of computer hardware.

- Primary objective: Learn how physical computers work

- Side object: Learn how virtual machines are implemented (virtual machinese form a critical component of a high level language implementations like Javascript, Python & Ruby)

## The Computer Specification:

a. 20 bytes of memory
b. 3 registers
c. 5 instructions

a. Memory Specification:

- We use a fixed size array (length == 20) to model memory in our virtual machine. The memory address of our vm are represented by the indices of the array.

- Our Memory is divided into 3 sections:

1. Instructions occupy the first 14 bytes

2. 2 bytes for output. The 2 bytes of output always represent one 2-byte number following the little endian system. The lease significant byte occupies the smaller array index location. (Intel computers encode multi-byte numbers in this order)

3. 4 bytes for 2 separate 2 bytes inputs.

b. Registers

- There are 2 general purpose ones (A & B) that are 16 bits wide. We can map two-byte values onto it.

- We have 1 program counter that stores the address of the current instruction. The program counter should always be incremented after each instruction, and no instruction can modify its value in any other way.

c. Instructions

- in order to write the stored program, we need to understand one more characteristic about this computer: 

- the arithmetic unit can't read/write values from/to main memory. it can only read from two internal memory cells (registers) called A & B. Unlike RAM, these cells are 16 bits wide, meaning the computer can do 16bit operations in a single 'cycle' of work. When the computer is done performing an arithmetic operation such as addition with the values from A and B, it writes the result back to the A register.

- We have 5 kinds of instructions

1. Load Word  (01h) -> 0000 0001 
2. Store Word (02h) -> 0000 0002 
3. Add        (03h) -> 0000 0003 
4. Sub        (04h) -> 0000 0004
5. Halt       (FFh) -> 1111 1111

- This is what we need the computer to do: 
1. Load Word $a (10h) -> 0001 0000 - load input 1 into register A
2. Load Word $b (12h) -> 0001 0010 - load input 2 into register B
3. Add $a $b - Add the two registers + store result in register A
4. Store Word $a -> 0000 1110 - Store the value in register A to the output device
5. Halt

- What the whole program looks like, stored in memory.

load_word $a
00. 0000 0001
01. 0000 0001
02. 0001 0000
load_word $b
03. 0000 0001
04. 0000 0010
05. 0001 0010
add_$a_$b
06. 0000 0011
07. 0000 0001
08. 0000 0010
store_word $a
09. 0000 0010
10. 0000 0001
11. 0000 1110
halt 
12. 1111 1111
Does nothing (i believe)
13. 0000 0000

## Exercise

- Write a virtual computer function that:

1) takes as input a reference to main memory (an array of 20 bytes). 

2) executes the stored program by fetching and decoding each instruction until it reaches halt, then returns

3) function shouldn't return anything, but should have the side effect of mutating 'main memory'

- The virtual computer should have one piece of internal state - an array of three registers: PC, A & B. Main memory is considered external state because it is passed in as an argument

- Write some tests for your virtual computer function using different stored programs and different input values. Your test inputs should just be array literals representing main memory, the expected outputs should be the same.