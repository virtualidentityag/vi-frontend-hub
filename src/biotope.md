# Biotope
Level: *Wise Walrus*

<img src="./assets/walrus_badge.svg" width="30%" height="auto" alt="wise_walrusp">

You now have all the knowledge to build great projects with StencilJS. But maybe you already heard about our very own tool to create frontend frameworks: Biotope. In 2018 we began developing it and even though there were many reasons to go on with Stencil instead of Biotope - same patterns, but with the support of the development community and not at our own cost - it was definitely not an easy decision.
This chapter will help you to get a brief overview of how Biotope works so you can get started also on projects that are still using that technology.

> Goal: You gain a basic understanding of how Biotope works and how to create components with it.

---

## Preparation

Biotope is similar to StencilJS, though it works a little bit differently. In this chapter you will start to get to know Biotope by building a simple web component with Biotope Element.

---

## Biotope Element

### Hints and Guidelines

- A component always consists of CSS and HTML (JS is optional)
- Each component lives in its own folder
- Styles are located in `styles.scss`
- Where HTML and JS is located depends on the way the component is generated. You can have one file for the whole component or split it up in multiple files for more complex components. 
- Each CSS class starts with a unique component name
- The HTML of each component only uses its own prefixed classes
- Components can use other components, but they never overwrite their styles
- The separate files of your component will be merged to one file by the biotope build system. So everything you import in the index.js, the imports of those imports, the imports of those imports... (see where I am going? ;)) will be merged and bundled into one file.


### Resources

- Web components: https://developer.mozilla.org/en-US/docs/Web/Web_Components
- Introduction to web components: https://www.webcomponents.org/introduction
- Building applications with web components: https://www.youtube.com/watch?v=0FstJG9t5v0
- Building progressive web apps with web components: https://www.youtube.com/watch?v=we3lLo-UFtk
- Gulp: https://css-tricks.com/gulp-for-beginners/
- SCSS: https://css-tricks.com/using-sass-control-scope-bem-naming/
- Babel: https://www.pubnub.com/blog/2015-07-30-introduction-to-babel-javascript-compiler-for-es6/

### Challenge
#### 1. Explore Biotope Element
Create a new Biotope project and install Biotope Element v4 in a local project using npm and start exploring. Your mentor can help you get going. Try to figure out how Biotope works. Have a look at our [Biotope Element documentation](https://element.biotope.sh/) and the [Biotope Repository](https://github.com/biotope/biotope).

#### 2. Add a simple component
You can play around with it a little bit by adding a simple component.

#### 3. Add configuration to projectConfig.js
Biotope build is mainly used for bundling TypeScript components. If you added a JavaScript component in the previous step, you need to add the following configuration to our projectConfig.js:
```
copy: {
  ignoreList: [
		'components/**/*.js'
	]
},
tsEntryPoints: [
			'resources/ts/**/*.ts',
			'components/**/*.ts',
			'components/**/*.js'
		]
```

#### 4. Templating with Handlebars
Try to use handlebars in a component. Add some JSON data and do some plug and play.

#### 4. Build an accordion
You've already built an accordion component with StencilJS. In this chapter, we want you to build a similar component with Biotope. So go ahead and add an accordion component in TypeScript to your project.

### Questions
<questions-component>
  <question-component>Why are we using TS?</question-component>
  <answer-component>Typescript enhances JavaScript and gives it type-safety. This helps us to eradicate a lot of potential bugs already on build time as well as keeping a clear pictures of the data strctures being used in the project.</answer-component>
  <question-component>What is Biotope? (your own words)</question-component>
  <answer-component>Biotope is a toolchain for lasting Design Systems. It's a collection of tools to help you develop components for said system.</answer-component>
  <question-component>What is the main difference between building components with Biotope and StencilJS?</question-component>
  <answer-component>StencilJS uses TSX and Biotope uses TypeScript to build web components.</answer-component>
  <question-component>I would like to render an HBS template into the DOM, how would I do it?</question-component>
  <answer-component>You would have to include the handlebars runtime in the browser and then provide the loaded template with data to generate HTML. This HTML can then be appended to the DOM.</answer-component>
  <question-component>What is the recommended way of loading styles and JavaScript in Biotope?</question-component>
  <answer-component>Use the resource loader!</answer-component>
  <question-component>Why do we have a coding styleguide in Biotope?</question-component>
  <answer-component>A coding styleguide helps to keep all the code aligned clean and nicely. So it will be easy for a biotope developer to switch projects or even move code from one biotope project to another.</answer-component>
  <question-component>What is babel?</question-component>
  <answer-component>Babel is a JavaScript compiler, which takes your JS and transforms it depending on the configuration provided. It can help to transpile ES6/7/8 down to ES5. It can add new, unsupported browser functionality, by automatically add the required polyfills.</answer-component>
  <question-component>What is immutable vs. mutable?</question-component>
  <answer-component>An immutable value will never be changed. It is constant. Rather than changing the value we create a new value that represents the new state of the old one. A mutable value on the other hand can be change at will, which you will never know the current value of it.</answer-component>
  <question-component>When should you use a mutable data structure?</question-component>
  <answer-component>Never! Well, only if there I definitely no way to solve your problem in an immutable way</answer-component>


<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    }]"/>

---------------------------------------

_**What helped you to master the challenges in this chapter? Please let us know and update this chapter.**_
