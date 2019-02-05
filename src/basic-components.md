# Biotope Basic Component
Level: *Tremendous Turtle*

## Preparation

You have learned a lot of basics in our daily developer life so far. You should feel comfortable with JS, CSS and HTML and have some experience with NPM, Node and Gulp.

You have heard about Biotope. Biotope is a Component Ecosystem we develop in the open here at VI. After this Level you should feel comfortable writing simple components inside Biotope. Don't fear to ask, propose and make changes.


### Hints and Guidelines

- A component always consists of CSS and HTMl (JS is optional)
- Each component lives in it's own folder
- HTML and CSS are located in `index.js`
- Styles are located in `style.scss`
- Each CSS class starts with a unique component name
- The HTML of each component only uses it's own prefixed classes
- Components can use other components, but they never overwrite their styles

## Challenge
### 1. Biotope playground
Fork the biotope playground on Github and start exploring. Your mentor will help you get going. Try to figure out how Biotope works. Have a look at our documentation.

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
- What is Biotope (your own words)
- Whats a webcomponent?
- I would like to render a HBS template on the client, how would i do it?
- Whats a polyfill and how does it work under the hood?
- How can i check if a client supports a CSS property?
- How can i check if a technology can be used safely?
- When do i use a relative path?
- What is a blocking script?
- Whats the recommended way of loading styles and javascript in Biotope?
- Why do we have a coding styleguide in Biotope?
- What is SCSS?
- What is Babel?
- What is Gulp?


<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    },
    {
      username: 'jurekbarth',
      name: 'Jurek Barth'
    }]"/>
