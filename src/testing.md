# Testing: Basic Unit Testing
Level: *Subsidiary Sloth*

![sloth.jpg](./assets/sloth.jpg)

## Preparation
- Read about TDD and learn the difference between Jest, Mocha and Chai. When you feel ready set up Jest (look up links in the resources).
- If you have installed Jest globally you can just write in your terminal `jest` and it will run your test file.

## Resources

https://jestjs.io/docs/en/getting-started.html

https://flaviocopes.com/jest/

https://mochajs.org/

http://www.chaijs.com/

https://www.youtube.com/watch?v=0GypdsJulKE


## Challenge
Starting With TDD. Write a test for a function that checks if a dashed string is converted to camel case.

`_Convert_me_to_camel_case_ => convertMeToCamelCase`

Write 7-10 tests for your function.




**Notes:**
- Start with the simplest test.
- You do not need any HTML in order to test your function.
- Everything the test needs should be included inside the test.

Example:
```
/* example.js */

const yourFunction = (parameter) => {
  //Your solution to the test
};

module.exports = {
  yourFunction
};
```
```
/* example.test.js */

const {
  yourFunction
} = require ('./example');

test('test requirements'), () => {
  expect(yourFunction(parameter)).toBe(undefined);
};
```

<questions-component>
  <question-component>What's the difference between unit and integration tests?</question-component>
  <answer-component>Unit tests, as they say only test the smallest units of a programm. Normaly one function at a time. Integration tests on the other hand, test that the building blocks of an programm work together as they should.</answer-component>
  <question-component>Why do we use TDD? And do you think it's a good idea?</question-component>
  <answer-component>TDD ensures that we only code what we need to and the we do not break anything after it already worked. It also helps us to create clean code.</answer-component>
  <question-component>What are Mocha, Chai and Jest and what are these three libraries doing?</question-component>
  <answer-component>Mocha is a test runner with a very basic set of test functions. Chai adds to mocha a lot of test functions to test specific cases. Jest is a all in one solutions which does not need a lot of configuration.</answer-component>
</questions-component>

<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    },]"/>