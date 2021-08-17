## Testing

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
code: wordCounter("");
Expected Output: 0;


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word if text is an empty string" 
Code: 
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0;

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same." 
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1;

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0;

Test: "It should return the number of occurrences of a word."
Code: 
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


Describe mostUsedWords()

Test: "It should return 0 when text is an empty string"
Code: 
const text = "";
const mostUsedWords(text);
Expected Output: 0;


Test: "It should return all words in an array when text has only 1 to 3 words"
Code:
const text = "red green blue";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"]


Test: "It should return the 3 most used words when text has 4 or more words"
Code:
const text = "red green blue red purple green blue";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"] 

Test: "It should not return an array with an empty string as an element even if text includes many empty spaces"
Code:
const text = "red     blue   red    purple  green blue";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"] 

Test: "It should ignore punctuation when counting elements."
Code:
const text = "red green blue red purple green blue.";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"] 

Test: "It should ignore case when counting elements."
Code:
const text = "red green blue REd purple green blue.";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"] 

Test: "It should ignore numbers when counting elements."
Code:
const text = "red green blue REd purple 55 55 55 55 green blue.";
const mostUsedWords(text);
Expected Output: ["red", "green", "blue"] 

<!-- handle one word at a time -->
<!-- call numberOfOccurrencesInText() on each element -->
<!-- get an array of the number for each word -->
<!-- filter repeats -->
<!-- sort -->


<!-- handle boundary/special cases -->
trivial tests will go here
<!-- .split -->

<!-- call numberOfOccurrencesInText() on each element -->
[["red", 2], ["green" 3], ["blue" 2], "red" 2, "green" 3, "green" 3, "blue" 2, "purple" 1] 
<!-- .filter duplicates -->
["red" 2, "green" 3, "blue" 2, "purple" 1]
<!-- .sort -->
["green" 3, "red" 2, "blue" 2, "purple" 1]
<!-- .splice first 3 -->
["green" 3, "red" 2, "blue" 2]
<!-- output in meaningful way -->
<!-- it seems like it's "bleeding into" or "transferring" to ui logic here -->

<!-- display this hard-coded -->
Most common words:
<!-- display each word based on the array -->
hi: 3
whoa: 2
yay: 2
<!-- display each number -->


















# Project Title
Simple overview of use/purpose.  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/nathan_fletcher.svg?style=social&label=Follow%20%40nathan_fletcher)](https://twitter.com/nathan_fletcher)

## Author

Nathan Fletcher

## Description

This project is an opportunity to demonstrate my abilities using new tools and technologies

## Techonologies used:

- Git
- HTML
- CSS
- Bootstrap

## Setup

1. Clone the source code from the [repo](https://github.com/nathanfletch/portfolio)
2. Navigate to the directory on your computer.
3. Open the index.html file in your browser.


## Known Bugs

There are no known bugs at this time.

## Future Plans

Additional features will be implemented such as:

- CSS animation
- Interactive elements
- Links to additional projects

## Contact

The best way to reach me is by [email](mailto:nathan.fletcher@gmail.com).

## License

The MIT License (MIT)

Copyright (c) 2021 Nathan Fletcher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.