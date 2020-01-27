/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

let reverseString = (input) => {

    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        let temp = input[left];
        input[left++] = input[right];
        input[right--] = temp;
    }

    return input;
}

console.assert(reverseString("hello".split('')).join("") == "olleh", "Reverse for 'hello' failed.");
console.assert(reverseString("Hannah".split('')).join("") === "hannaH", "Reverse for 'Hannah' failed.");
console.assert(reverseString("Artem".split('')).join("") === "metrA", "Reverse for 'Artem' failed.");


