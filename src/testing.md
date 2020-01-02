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


## Questions
1. Whats the difference between unit and integration tests?
2. Why do we use TDD? And do you think it's a good idea?
3. What is Mocha, Chai and Jest and what are these three libraries doing?

<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    },]"/>