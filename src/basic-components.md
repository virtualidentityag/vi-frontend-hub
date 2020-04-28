# Biotope Basic Component
Level: *Tremendous Turtle*

<img src="./assets/turtle_badge.svg" width="30%" height="auto" alt="tremendous_turtle">

## Preparation

You have learned a lot of basics in our daily developer life so far. You should feel comfortable with JS, CSS and HTML and have some experience with NPM, Node and Gulp.

You have heard about Biotope. Biotope is a Component Ecosystem we develop in the open here at VI. After this Level you should feel comfortable writing simple components inside Biotope. Don't fear to ask, propose and make changes.


### Hints and Guidelines

- A component always consists of CSS and HTML (JS is optional)
- Each component lives in it's own folder
- HTML and JS are located in `index.js`
- Styles are located in `style.scss`
- Each CSS class starts with a unique component name
- The HTML of each component only uses it's own prefixed classes
- Components can use other components, but they never overwrite their styles

## Challenge
### 1. Explore Biotope Element
Install Biotope Element in a local project using npm and start exploring. Your mentor will help you get going. Try to figure out how Biotope works. Have a look at our [documentation](https://element.biotope.sh/).

### 2. Add a simple component
Add a simple component like a `title-component` or a `headline-component`

### 3. Templating with Handlebars
Try to use handlebars in a component. Add some JSON data and do some plug and play.

### 4. Paths
Getting paths right.
```
./
../
/*
```
HTML path to server path mapping
When do i use relative and when absolute paths?

### 5. Biotope Resource Loader
Add the [resource loader](https://github.com/biotope/biotope-resource-loader) to your project.
- Reference resources
- dependencies
- loading order
- programatic loading
- have a look in the main.js how it's initialized

### 6. Build an accordion
Add an accordion component. Get things working and then try to improve.

## Resources

- Web components: https://developer.mozilla.org/en-US/docs/Web/Web_Components
- Introduction to web components: https://www.webcomponents.org/introduction
- Building applications with web components: https://www.youtube.com/watch?v=0FstJG9t5v0
- Building progressive web apps with web components: https://www.youtube.com/watch?v=we3lLo-UFtk
- Gulp: https://css-tricks.com/gulp-for-beginners/
- SCSS: https://css-tricks.com/using-sass-control-scope-bem-naming/
- Babel: https://www.pubnub.com/blog/2015-07-30-introduction-to-babel-javascript-compiler-for-es6/

## Questions
<questions-component>
  <question-component>What is Biotope? (your own words)</question-component>
  <answer-component>Biotope is a toolchain for lasting Design Systems. It's a collection of tools to help you develop components for said system.</answer-component>
  <question-component>What's a webcomponent?</question-component>
  <answer-component>A webcomponent is an encapsulated peace of functionality/styles which represent a part of the DOM. It is a relatively new technology which is not supporteed by all browsers. But there a good polyfills.</answer-component>
  <question-component>Whats a polyfill and how does it work under the hood?</question-component>
  <answer-component>A polyfill is a script which looks for functionality of the browser and add it, if it doeas not exist. So if for example <code>Array.prototype.find</code> is not defined, the polyfill will add this functionality which was written in JS by the author.</answer-component>
  <question-component>I would like to render a HBS template into the DOM, how would I do it?</question-component>
  <answer-component>You would have to include the handlebars runtime in the browser and then provide the loaded template with data to generate HTML. This HTML can then be appendet to the DOM.</answer-component>
  <question-component>How can i check if a client supports a CSS property?</question-component>
  <answer-component><a href="http://www.caniuse.com" target=_blank>http://www.caniuse.com</a></answer-component>
  <question-component>What is a blocking script?</question-component>
  <answer-component>A blocking script is a script that is being loaded by a script tag in the DOM and blocks the loading of the rest of the resources, until it's done.</answer-component>
  <question-component>Whats the recommended way of loading styles and javascript in Biotope?</question-component>
  <answer-component>Use the resource loader!</answer-component>
  <question-component>Why do we have a coding styleguide in Biotope?</question-component>
  <answer-component>A conding styleguide helps to keep all the code aligned clean and nicely. So it will be easy for a biotope developer to switch projects or even move code from one biotope project to another.</answer-component>
  <question-component>What is babel?</question-component>
  <answer-component>Babel is a javascript compiler, which takes your JS and transforms it depending on the configuration provided. It can help to transpile ES6/7/8 down to ES5. It can add new, unsupported browserfunctionality, by automatically add the required polyfills.</answer-component>
</questions-component>


<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    }]"/>

---------------------------------------

_**What helped you to master the challenges in this chapter? Please let us know and update this chapter.**_
