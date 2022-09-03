# ASCII Art
 
## Synopsis
Do you feel you are an artist at heart? Unfortunately you are a programmer :( Why not give a try at ...
 
In this puzzle, transform strings of characters into ASCII ART.

## Goal
In stations and airports you often see this type of screen:

![image](https://user-images.githubusercontent.com/110959584/188247291-bdb4d234-9a4b-461d-942c-3fc69ff042bf.png)

Have you ever asked yourself how it might be possible to simulate this display on a good old terminal? We have: with ASCII art! The goal of the problem is to simulate an old airport terminal display: your program must display a line of text in ASCII art. You have to split strings, store them and recreate others. You can use data structures like arrays or hash tables.

## Rules
ASCII art allows you to represent forms by using characters. To be precise, in our case, these forms are words.
 
Your mission is to write a program that can display a line of text in ASCII art in a style you are given as input.

## Input
* Line 1: the width L of a letter represented in ASCII art. All letters are the same width.
* Line 2: the height H of a letter represented in ASCII art. All letters are the same height.
* Line 3: The line of text T, composed of N ASCII characters.
* Following lines: the string of characters ABCDEFGHIJKLMNOPQRSTUVWXYZ? in the form of ASCII art.

## Output
* The text T in ASCII art.
* The characters a to z are shown in ASCII art by their equivalent in upper case.
* The characters that are not in the intervals [a-z] or [A-Z] will be shown as a question mark in ASCII art.

## Constraints
* 0 < L < 30
* 0 < H < 30
* 0 < N < 200
