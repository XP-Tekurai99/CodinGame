# Unary
 
## Synopsis
Test your encoding skills in this easy puzzle where you will be asked to transform a string into a “unary” string such as 0 00 000 0...

## Goal
Write a program that takes an incoming message as input and displays as output the message encoded using this method.

## Rules
Here is the encoding principle:
* The input message consists of ASCII characters (7-bit).
* The encoded output message consists of blocks of 0.
* A block is separated from another block by a space.
* Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values). First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0. Second block: the number of 0 in this block is the number of bits in the series.

## Input
* Line 1: the message consisting of N ASCII characters (without carriage return)

## Output
* The encoded message

## Constraints
* 0 < N < 100
