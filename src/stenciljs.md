# StencilJS: Building Web Components
Level: *Tremendous Turtle*

<img src="./assets/turtle_badge.svg" width="30%" height="auto" alt="tremendous_turtle">

You have learned a lot of basics in our daily developer life so far. You should feel comfortable with JS, CSS and HTML and have some experience with NPM, Node and Gulp. Now it is time for you to get to know StencilJS!

> Goal: You understand how StencilJS helps us to build scalable and reusable frontend frameworks and you are able to implement a simple component in a typical Stencil project.

---

## Preparation

You have already heard about StencilJS. In this chapter you will start to get to know Stencil by building a simple web component.
Stencil components are written in TSX (TypeScript + JSX). If you do not know TypeScript yet start exploring it on the TypeScript playground! 

---

## StencilJS

### Hints and Guidelines

- Each component lives in its own folder
- Component names are written in dash case and need at least one dash
- Styles are located in the `:host` in the `my-component.scss`
- StencilJS components are written in TSX
- Each CSS class starts with a unique component name
- Each component only uses its own prefixed classes
- Components can use other components, but they never overwrite their styles


### Resources

- Web components: https://developer.mozilla.org/en-US/docs/Web/Web_Components
- Introduction to web components: https://www.webcomponents.org/introduction
- Building applications with web components: https://www.youtube.com/watch?v=0FstJG9t5v0
- Building progressive web apps with web components: https://www.youtube.com/watch?v=we3lLo-UFtk
- Gulp: https://css-tricks.com/gulp-for-beginners/
- SCSS: https://css-tricks.com/using-sass-control-scope-bem-naming/
- Babel: https://www.pubnub.com/blog/2015-07-30-introduction-to-babel-javascript-compiler-for-es6/
- TypeScript Playground: http://www.typescriptlang.org/play/

### Challenge
#### 1. Explore 
Create a new Github repository with our component library template and start exploring. Feel free to ask your mentor if you need help. Try to figure out how the setup works. Have a look at [Stencil's documentation](https://stenciljs.com/) and [Storybook](https://storybook.js.org/).

#### 2. Add a simple component
Add a simple component like a `title-component` or a `headline-component` with `npm run generate`.

#### 3. Paths
Getting paths right: Think about where those paths lead and when you should use relative and when absolute paths.
```
./
../
/*
```

#### 4. Build an accordion
Add an accordion component. Get things working and then try to improve.

#### 5. Want a challenge?
If you want a challenge, try using an [open API](https://github.com/toddmotto/public-apis) to fill your accordion.

### Questions
<questions-component>
  <question-component>What is StencilJS? (your own words)</question-component>
  <answer-component>Stencil is a toolchain for building reusable, scalable Design Systems by creating Web Components that run in every browser.</answer-component>
  <question-component>What is a web component?</question-component>
  <answer-component>A web component is an encapsulated peace of functionality/styles which represent a part of the DOM. It is a relatively new technology which is not supported by all browsers. But there a good polyfills.</answer-component>
  <question-component>What is a polyfill and how does it work under the hood?</question-component>
  <answer-component>A polyfill is a script which looks for functionality of the browser and add it, if it does not exist. So if for example <code>Array.prototype.find</code> is not defined, the polyfill will add this functionality which was written in JS by the author.</answer-component>
  <question-component>How can I check if a client supports a CSS property?</question-component>
  <answer-component><a href="http://www.caniuse.com" target=_blank>http://www.caniuse.com</a></answer-component>
  <question-component>What is a blocking script?</question-component>
  <answer-component>A blocking script is a script that is being loaded by a script tag in the DOM and blocks the loading of the rest of the resources, until it's done.</answer-component>
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
  <answer-component>A HTTP request has separate steps: Ask for a resource/post Data somewhere. Initiate a handshake with the target server. The server responds to the handshake. Now the actual request is being transferred. The target processes this data and responds to the request.</answer-component>
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
  <answer-component>REST is a methodology to build APIs. It has a clear url scheme to get, update and delete resources.</answer-component>
  <question-component>What are alternatives to REST?</question-component>
  <answer-component>GraphQL</answer-component>

  <question-component>Why do we have a coding styleguide?</question-component>
  <answer-component>A coding styleguide helps to keep all the code aligned clean and nicely. So it will be easy for a developer to switch projects or even move code from one project to another.</answer-component>
  <question-component>What is babel?</question-component>
  <answer-component>Babel is a JavaScript compiler, which takes your JS and transforms it depending on the configuration provided. It can help to transpile ES6/7/8 down to ES5. It can add new, unsupported browser functionality, by automatically add the required polyfills.</answer-component>
  <question-component>What is immutable vs. mutable?</question-component>
  <answer-component>An immutable value will never be changed. It is constant. Rather than changing the value we create a new value that represents the new state of the old one. A mutable value on the other hand can be change at will, which you will never know the current value of it.</answer-component>
  <question-component>When should you use a mutable data structure?</question-component>
  <answer-component>Never! Well, only if there I definitely no way to solve your problem in an immutable way</answer-component>
</questions-component>


<authors-component v-bind:authors="[
    {
      username: 'RunzelRosinchen',
      name: 'Rebecca Emmanuel'
    }]"/>

---------------------------------------

_**What helped you to master the challenges in this chapter? Please let us know and update this chapter.**_
