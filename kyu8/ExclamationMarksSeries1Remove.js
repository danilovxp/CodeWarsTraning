// https://www.codewars.com/kata/57fae964d80daa229d000126

// Exclamation marks series #1: Remove a exclamation mark from the end of string

// Description:
// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

const remove = s => s.replace(/!$/, "");
