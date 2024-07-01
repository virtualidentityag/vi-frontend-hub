# Quiz for new employees
Welcome at VI! To get you going we want to check your know-how. So let's start with a quiz! If you want or need to go deeper into one topic you can always go to the respective [internship](internship/) challenge.

> Goal: We know where you stand and how to proceed with your work at VI.

---
## Development Basics
### Git

<questions-component>
  <question-component>What's Git?</question-component>
  <answer-component>Git is a versioning software which allows users to manage different versions of their code. It is like a time machine, which allows you to go back in time and merge different timelines together.</answer-component>
  <question-component>What's the difference between Git and GitHub?</question-component>
  <answer-component>Git is the tool, GitHub is the platform. On GitHub you can host repositories.</answer-component>
  <question-component>What's the Git Flow?</question-component>
  <answer-component>Git Flow is a branching model. It serves blueprints on how to name branches and how to handle merging them together.</answer-component>
  <question-component>What is a repository?</question-component>
  <answer-component>A repository is an instance of a git project. It is represented by the .git/ folder in your project. In it, it keeps track of all versions of all files.</answer-component>
  <question-component>What is a commit?</question-component>
  <answer-component>A commit it a collection of changes done to the filesystem. The changes can be create, edit or deletion of files and their contents. From a collection of these commits, git can build your current version of the code.</answer-component>
  <question-component>What is a branch?</question-component>
  <answer-component>A branch is a pointer to a specific commit. You basically name this commit and the whole path to it as a "branch" in your project. When you commit on a branch, the commits will be added on top of the pointed to commit and in addition, the branch pointer will move along to the latest commit on this branch. This "top of the branch" is called HEAD</answer-component>
  <question-component>What is a remote?</question-component>
  <answer-component>A remote is a pointer to a copy of your repository in your git project. The default remote is named origin. You can add extra remotes by calling <code>git remote add [name] [url]</code>. A remote can be on the web, hosted on platforms like github or gitlab, but also on the same machine.</answer-component>
  <question-component>What does <code>git clone</code> do?</question-component>
  <answer-component>This command copies the repository you pass as option to your computer. It automatically sets the remote 'origin' to your source repository. [Reference](https://git-scm.com/docs/git-clone)</answer-component>
  <question-component>What does <code>git pull</code> do?</question-component>
  <answer-component>git pull will get the newest version of the current branch from the remote origin, if no other remote names are passed as options. [Reference](https://git-scm.com/docs/git-pull)</answer-component>
  <question-component>What does <code>git add</code> do?</question-component>
  <answer-component>This command adds files to stage. It basically tells git: These files are ready to commit. As soon as you commit, everything which is currently staged, will be commited. [Reference](https://git-scm.com/docs/git-add)</answer-component>
  <question-component>What does <code>git status</code> do?</question-component>
  <answer-component>git status will show the current status of your work. It will display changed files and show if these files are already staged or not. [Reference](https://git-scm.com/docs/git-status')</answer-component>
  <question-component>What does <code>git push</code> do?</question-component>
  <answer-component>git push will send all the commits on the current branch to the respective branch on the remote origin, if no other options are passed. [Reference](https://git-scm.com/docs/git-push)</answer-component>
  <question-component>What does <code>git merge [target]</code> do?</question-component>
  <answer-component>git merge will attempt to merge the target branch in your current branch. Git will give it's best to avoid any conflicts or resolve them by itself. Nevertheless conflicts might arise, as there might have been changes on the same line of code.</answer-component>
</questions-component>

### Page Layout
<questions-component>
  <question-component>What are semantic elements in HTML5? Name at least 5</question-component>
  <answer-component>Each element in HTML has a special use case you use it for. In HTML version 5 there were multiple semantic elements added which replace workarounds the web came up with. Some examples could be:
    - nav
    - header
    - footer
    - video
    - main
    - aside
  </answer-component>
  <question-component>When do you use which semantic element?</question-component>
  <answer-component>The used tag should whenever possible describe the semantic meaning of the websites element</answer-component>
  <question-component>Why is the correct hierarchy of headlines important?</question-component>
  <answer-component>The correct semantic hierarchy of headlines is for human readers and automated search engines important to easily determine the information structure.</answer-component>
  <question-component>Should you use multiple h1 headlines in one HTML document?</question-component>
  <answer-component>No! This will destroy the page structure and give you a penalty to search rankings,</answer-component>
  <question-component>What are pseudo elements? What is their purpose?</question-component>
  <answer-component>A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to: Style the first letter, or line, of an element. Insert content before, or after, the content of an element.</answer-component>
  <question-component>How do you include webfonts?</question-component>
  <answer-component>Local font files via @font-face or google font via Link-tag in html or @import in scss</answer-component>
  <question-component>Which webfont formats could be used? Why are there different formats?</question-component>
  <answer-component>TTF, OTF, WOFF, EOT. Different Browsers support different webfoot formats.</answer-component>
  <question-component>How can you provide different font weights and different font styles for a webfont?</question-component>
  <answer-component>Import correct font styles (every font weight you need on the page) with a @font-face, where you can then set the fonts weight. Change the displayed font styles with css in the rule with the font-weight attribute</answer-component>
  <question-component>How are CSS stylesheets embedded?</question-component>
  <answer-component>With a link tag in the html head</answer-component>
  <question-component>What is the purpose of normalize.css?</question-component>
  <answer-component>Consistently reset of default browser styles</answer-component>
  <question-component>What's the effect of specificity of CSS selectors?</question-component>
  <answer-component>Select specific DOM-elements with the matching css selector. Care: The more specific the selector, the harder to overwrite with another style.</answer-component>
  <question-component>What has to be considered when declaring CSS selectors?</question-component>
  <answer-component>How specific needs the selector to be? Is the selector unnecessarily long or is the selector to general and you unintentionally overwrite other elements</answer-component>
  <question-component>What does <code>!important</code> do and why shouldn't you use it?</question-component>
  <answer-component><code>!important</code> is an anti-pattern to overwrite every other style and get the highest priority on the element. Maintaining a site with !important styles causes headache because it destroys the expected behavior and can’t be overwritten.</answer-component>
  <question-component>What are vendor-prefixes and which ones do exist?</question-component>
  <answer-component>Vendor-prefixes allow to use new features in different browsers: -webkit-, -ms-, - moz-, -o-</answer-component>
  <question-component>What are shorthand properties? Name at least 3?</question-component>
  <answer-component>Bring together different but relative css attributes into one. Often used attributes: padding, margin, box-shadow, background</answer-component>
  <question-component>When do you use img tags and when CSS background images?</question-component>
  <answer-component>Image tag will be part of the DOM and therefore part of the semantic of the page. Use background images if the image is not part of the actual content and if you need background specific styles as background-size cover or contain.</answer-component>
  <question-component>What are the different position properties and what's their effect on surrounding elements?</question-component>
  <answer-component>Static and relative positioned elements are included in the site context and affect the surrounding elements. Whereas absolute and fix positioned elements are taken out of the normal page flow and don’t affect the surrounding elements.</answer-component>
  <question-component>What is z-index and what's its effect?</question-component>
  <answer-component>The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.</answer-component>
  <question-component>How can you place two block elements side by side?</question-component>
  <answer-component>Use inline-block or layouting methods like flexbox or css grid.</answer-component>
  <question-component>What is CSS box-model?</question-component>
  <answer-component>CSS box model describes multiple properties including borders, margin, padding and the content itself, of each DOM-element.</answer-component>
  <question-component>What is CSS Flexbox? When do you use it?</question-component>
  <answer-component>Flexbox is a layout mode in css3, that provides for a better arrangement of all of the page elements that behave in a predictable mode.</answer-component>
</questions-component>

### Navigation
<questions-component>
  <question-component>Which semantic element should be used for page navigation?</question-component>
  <answer-component>Nav-tag for the navigation and a ul > li structure with ARIA labels for the menu and the menu items.</answer-component>
  <question-component>How can you add semantic meaning to any HTML elements?</question-component>
  <answer-component>If there is no native HTML tag for the semantic meaning of the element you can use the ARIA-role attribute.</answer-component>
  <question-component>Why should semantic attributes be added to html elements?</question-component>
  <answer-component>They add essential meaning to your content, which lets web browsers, search engines, screen readers, RSS readers, and ultimately users understand it.</answer-component>
</questions-component>

### Responsive Webdesign
<questions-component>
  <question-component>What is responsive design?</question-component>
  <answer-component>The goal of responsive design is to build websites that change the layout based on the actual device and viewport size.</answer-component>
  <question-component>What are media queries?</question-component>
  <answer-component>It uses the @media rule to include a block of CSS properties only if a certain condition like the min or max viewport width is true.</answer-component>
  <question-component>How can you realize a responsive image?</question-component>
  <answer-component>With the image srcset attribute or the picture HTML-tag</answer-component>
  <question-component>What do you use the viewport meta tag for?</question-component>
  <answer-component>The meta viewport element gives the browser instructions on how to control the page's dimensions and scaling.</answer-component>
</questions-component>

### SVGs
<questions-component>
  <question-component>What is SVG and what are its advantages over pixelgraphics?</question-component>
  <answer-component>
    SVG is an image format, which is image and code in one. The single elements of the image are described by vectors. The advantage is that a vector image is scalable without losing quality.
  </answer-component>
  <question-component>What are SVG sprites and how do you use them?</question-component>
  <answer-component>
    An SVG Sprite is a collection of SVG images all together in on SVG. After adding them/loading them into a page, you select the portion of the sheet to display in other places on the page.
  </answer-component>
  <question-component>What are the advantages of SVG sprites compared to icon fonts and pixel graphics?</question-component>
  <answer-component>
    In iconfonts, individual parts of the icon cannot be colored individually. In addition, the developer often has to use pseudoelements instead of "real" dom.
    Pixel graphics are the most static icon formats. You cannot change anything about it but the size.
  </answer-component>
</questions-component>

### Package Manager

<questions-component>
  <question-component>What is a package manager like npm and what are the benefits of using one?</question-component>
  <answer-component>A package manager does exactly what his name implies: It manages packages which are libraries of code hosted in a package registry. It helps you to keep track of the different versions of the codebase and is the tool for installing packages in your project.</answer-component>
  <question-component>What is the purpose of the `package.json` file?</question-component>
  <answer-component>The <code>package.json</code> file contains all the information about the project. A name, a version, a description and most importantly: All the dependencies of the project, as well as their versions.</answer-component>
  <question-component>What is the purpose of the <code>package-lock.json</code> file?</question-component>
  <answer-component>While the <code>package.json</code> only lists the versions of the direct dependencies, the <code>package-lock.json</code> lists all the versions of the whole dependency tree. So every developer installing the project get exactly the same package tree.</answer-component>
  <question-component>What is the <code>node_modules</code> folder?</question-component>
  <answer-component>The <code>node_modules</code> folder contains all the packages installed in the project, as well as their dependencies. It gets generated on a <code>npm install</code></answer-component>
  <question-component>What happens when you execute <code>npm install</code> or <code>npm i</code>? Why is it necessary to execute this command?</question-component>
  <answer-component>This command will install/download all the dependencies listed in the <code>package.json</code> (<code>package-lock.json</code> if present) into the <code>node_modules</code> folder.</answer-component>
  <question-component>How do you add a new package to a npm project?</question-component>
  <answer-component><code>npm i [package-name]@[package-version]</code></answer-component>
  <question-component>How do you update a package in a npm project?</question-component>
  <answer-component>There are two update cases. If you want to update to the newest version that satisfies the version tag in the <code>package.json</code> just run <code>npm update</code>. If you want to install an entirely new version use <code>npm i [package-name]@[package-version]</code> instead. Avoid changing the version in the <code>package.json</code> manually, as it will break all the auto lock mechanisms of npm.</answer-component>
  <question-component>What is a task runner and what are the benefits of using one?</question-component>
  <answer-component>A task runner does as it says: It will run tasks for you. An example would be Gulp. You define what the tasks should do and when they will run, and the task runner will run them for you. This will take a lot of repeatable tasks from your hand and take care of them for you.</answer-component>
  <question-component>What are good tasks to automate? Think of typical processes that need to be executed for a project to run.</question-component>
  <answer-component>
  <ul>
    <li>Compilation</li>
    <li>Minify/Uglify</li>
    <li>Transpilation</li>
    <li>Copying/Moving of files</li>
    <li>Watching for changes</li>
  </ul>
  </answer-component>
</questions-component>

### SCSS
<questions-component>
  <question-component>What is BEM and what are its benefits?</question-component>
  <answer-component>BEM stands for Block, Element, Modifier. This methodology separates styles in Blocks, which are standalone entities, Elements, which are just a part of a block and modifiers, which are used to flag Blocks or Elements. This clear structure helps to build clearly understandable CSS/Sass code.</answer-component>
  <question-component>What are the benefits of sass compared to plain CSS?</question-component>
  <answer-component>
  In sass you, can declare variables, mixins, functions and baseclasses which you then can use all over your styles. The helps to avoid repetition and keeps your codebase clean (DRY principle)</answer-component>
  <question-component>Unmodified sass code can be used in web browsers. True or false?</question-component>
  <answer-component>False! Sass always needs to be compiled to css to be run in the browser.</answer-component>
  <question-component>What is a mixin in sass?</question-component>
  <answer-component>A mixin is a reusable block of sass that inserts rules into the place where you use it.</answer-component>
  <question-component>What is a function in sass?</question-component>
  <answer-component>A function returns a value which you can use as a value for a property.</answer-component>
</questions-component>

### JavaScript

<questions-component>
  <question-component>Why should you use plain JS and avoid jQuery?</question-component>
  <answer-component>As a lot of the functionality of jQuery is already in vanilla JS, jQuery doesn't add any benefits anymore but still adds a lot of filesize.</answer-component>
  <question-component>What is ECMAScript? How is it different from vanilla JS?</question-component>
  <answer-component>Trick question! ECMAScript basically is JavaScript and the version of JS is represented by the ECMAScript abbrevation: ES (i.e. ES6)</answer-component>
  <question-component>ES6 can be used in every browser. True or false?</question-component>
  <answer-component>Tralse/Frue. Not without transpilation (i.e. with babel)</answer-component>
  <question-component>What are common ways to debug code in the web development environment?</question-component>
  <answer-component>You either can use the debugger of your preferred browser, or add console.log, preferably debugger statements to your code. Overview of basic and advanced debugging techniques: https://flaviocopes.com/debugging/</answer-component>
  <question-component>What's the best way to make great animations?</question-component>
  <answer-component>With CSS you can create a lot of simple animations, which really run very fluid. But you are limited to simple movement/transformations. For more complex animations you would have to fall back to SVG/JS animations.</answer-component>
</questions-component>

### Events

<question-component>What are events and how do they work? What purpose do they serve?</question-component>
<question-component>What is event delegation and how does it work?</question-component>

### StencilJS

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

### Testing
<questions-component>
  <question-component>What's the difference between unit and integration tests?</question-component>
  <answer-component>Unit tests, as they say only test the smallest units of a program. Normally, one function at a time. Integration tests on the other hand, test that the building blocks of an program work together as they should.</answer-component>
  <question-component>Why do we use TDD? And do you think it's a good idea?</question-component>
  <answer-component>TDD ensures that we only code what we need to and the we do not break anything after it already worked. It also helps us to create clean code.</answer-component>
  <question-component>What are Mocha, Chai and Jest and what are these three libraries doing?</question-component>
  <answer-component>Mocha is a test runner with a very basic set of test functions. Chai adds to mocha a lot of test functions to test specific cases. Jest is an all in one solution which does not need a lot of configuration.</answer-component>
</questions-component>

### Automation

<question-component>What are the benefits of CD/CI?</question-component>
