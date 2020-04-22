# Biotope: Advanced Components
Level: *Labour-saving Ladybug*

## Prerequisites
- A suitable working component with some kind of state and more than one element in it e.g. an accordion.
- Confidence in writing Code

## Subject Areas
1. **Typescript**: Rewrite your components in typescript. Write Interfaces where needed and think about edgecases. Don't care about IE11! Make it as awesome and future proof as possible.
2. **Data handling**:
    - Filter array
    - Find in array
    - Sort array
    - Map array
    - Reduce
3. **APIs**: Handle API Calls over HTTP
    - Fetch data from a real API

## Resources

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

http://www.typescriptlang.org/play/

https://medium.com/infancyit/a-better-javascript-with-map-filter-reduce-b554f5bc3be3


## Challenge
Rewrite your Accordion or, if you want a challenge, a useful component using an [open API](https://github.com/toddmotto/public-apis). You need to tackle the above mentioned *subject areas*, so typescript is a must, as are data handling and an API.


## Questions
<questions-component>
  <question-component>Why are we using TS?</question-component>
  <answer-component>Typescript enhances Javascript and gives it typesafety. This helps us to readicate a lot of potential bugs already on build time as well as keeping a clear pictures of the data strctures being used in the project.</answer-component>
  <question-component>What is immutable vs. mutable?</question-component>
  <answer-component>An immutable value will never be changed. It is constant. Rather then changing the value we create a new values that represents the new state of the old one. A mutable value on the other hand can be change at will, which you will never know the current value of it.</answer-component>
  <question-component>When should you use a mutable data structure?</question-component>
  <answer-component>Never! Well, only if there I defenitely no way to solve your problem in an immutable way</answer-component>
  <question-component>Can you write your own filter functions using reduce?</question-component>
  <answer-component>Yes!</answer-component>
  <question-component>How do you use a spread operator and what is it good for?</question-component>
<answer-component>The spread operator allows an expression to be expanded in places where multiple elements/variables/arguments are expected. It is written as three dots: <code>...</code>. A simple example: 
<code>
const num1 = { a: '1', b: '2', c: '3'};
const num2 = { ...num1, d: '4', e: '5'};
// num2 = { a: '1', b: '2', c: '3', d: '4', e: '5' }
</code>
</answer-component>
  <question-component>How does a HTTP request work?</question-component>
  <answer-component>A HTTP request has separate steps: Ask for a resource/post Data somewhere. Initiate a handshake with the target server. The server responds to the handshake. Now the actual request is being transfered. The target processes this data and responds to the request.</answer-component>
  <question-component>What is a HTTP status code? Name three common codes and their meaning.</question-component>
  <answer-component>
    A status code represents the status of a request.
    <ul>
      <li>200: Everything OK</li>
      <li>401: Unauthorized</li>
      <li>403: Forbidden</li>
      <li>404: Resource not found</li>
      <li>500: Server Error</li>
    </ul>
  </answer-component>
  <question-component>What are alternatives to HTTP1.1? How is it different?</question-component>
  <answer-component>HTTP2 will only make one handshake and open a stream of data, which will cut a lot of the request times. Especially for a lot of files.</answer-component>
  <question-component>What is REST? What describes it best?</question-component>
  <answer-component>REST is a methology to build APIs. It has a clear url scheme to get, update and delete resources.</answer-component>
  <question-component>What are alternatives to REST?</question-component>
  <answer-component>GraphQL</answer-component>
</questions-component>

<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    },]"/>

---------------------------------------

_**A penny for your thoughts. Share what you learned with everyone following you on this journey.**_
