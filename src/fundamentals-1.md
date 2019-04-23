# Fundamentals I: HTML Semantics, Layout and Styling
Level: *Busy Blackbird*

You have already learned about our Manifesto, Biotope and have an overview of the first steps of this Roadmap.
In this Level you will learn how to write mobile first responsive web pages with HTML5 and CSS and how to create and use SVG Icons and Webfonts.
  
---------------------------------------
## Preparation
In this challenge you will learn how to create your own repository on GitHub, how to use Git and how you can use HTML5 Boilerplate for the following challenges.

### Resources
- Git Clients: https://git-scm.com/downloads
- Pro Git Book: https://git-scm.com/book/en/v2
- Git Command Line: https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line
- HTML5 Boilerplate: https://html5boilerplate.com
- What is Git: https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- What is Boilerplate: https://en.wikipedia.org/wiki/Boilerplate_code
- Git Flow: https://codeburst.io/trunk-based-development-vs-git-flow-a0212a6cae64

### Challenge
#### Create an account on Github
If you do not have an account at Github.com already, go to: https://github.com/join and create an account.
Please note that Github is a professional social network and choose an appropriate username.

#### Create a repository on Github
Login to [GitHub](http://github.com/login) and create a [new repository](https://github.com/new).

Choose a *repository name* for this project. Take a name of your own choice, be creative! - or use this level's name "busy-blackbird-page" if you're lazy :-)

#### Clone Github repository locally
For this step you need to know more about the command line and how to use it. Open your computer's command line and clone the new repository from github with `git clone` to get a local copy.

#### Add a new file to the empty repository locally
After cloning your remote repository you need to add files to it. For this exercise we will create the README file for our project.

Go to your code editor, create a new file and write a nice description about your repository. Save your file with the name "README.md" and stage your changes using `git add README.md`.

#### Commit and Push your new file
At this point your file is created and staged, you need to add a message that explains what you did and commit those changes. For that you use `git commit -m " "`. Where "-m" means message and inside the quotes you should write something that describes what you did (example: you can use `git commit -m "Add README file"`).

Now that your file is commited you need to send it to the project's remote repository so everybody can see your changes. For that you need to use `git push` and that's it!
You have pushed your first file to your remote repository 😄

#### Create new Branch
Now we are going to create a new branch to fill our repository with nice code 😆

Go to your command line again and create a new branch using `git branch name-of-the-branch`
**_>_** The name of the branch must be meaningful!

Choose the name you want for your new branch. This will allow you to have a new branch without mixing the content of your master branch. You should *never* work directly in your master branch.
Then you need to use `git checkout name-of-the-branch` to change to your new branch.

*If you are lazy, you can use `git checkout -b name-of-the-branch` this will create a new branch and checkout at the same time 🤪*

#### Get HTML5 Boilerplate
Now you're free to start playing with code, so download the HTML5 Boilerplate and extract it into your local repository.
Commit and push it into the repository.

#### Git clients
Some (normal 😄) people prefer to use graphical tools to use git, so If you do not have installed a git client already, find and install a [git client for your local operating system](https://git-scm.com/downloads/guis).
There are a lot of options so feel free to use the one that you enjoy more! 🙂

### Questions
- What's Git?
- What is a repository?
- What is a branch?
- What is a commit?
- What does push mean?
- What does fetch mean?
- What is a pull request?
- What's the difference between Git and Github?
- What's the Git Flow?

<br/>

---------------------------------------

## Page Layout
In this challenge you will learn how to use HTML Semantic elements and how to develop mobile first responsive websites.

### Hints and Guidelines
1. Use semantic elements to structure your webpages.
2. Use CSS Grid to define the layout
3. Mobile first! Mobile first!
4. ... but can we just say, the desktop second?!

### Resources
- When to use which semantic HTML5 element: [HTML5 Element Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)
- Why is CSS Grid a big deal and why should we care: [Getting Started with CSS Grid](https://css-tricks.com/getting-started-css-grid/)
- Download all screens for this level: [biotope-onboaring-fundamentals-1-screens.zip](/assets/fundamentals-1/biotope-onboaring-fundamentals-1-screens.zip)

### Challenge

#### Bring your body in shape - from header to footer:
First create an html page based on the HTML5 Boilerplate and segment it with semantic elements.
Then add basic CSS styling for these areas to match the layout shown in the screen graphics.

Other page content shown here will be created later and is not yet part of this challenge.

#### Screens
| Mobile 320px                                                                        | Desktop 1600px                                                                        |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| ![layout-320.png](./assets/fundamentals-1/screens/layout-320.png ':size=autox1000') | ![layout-1600.png](./assets/fundamentals-1/screens/layout-1600.png ':size=autox1000') |


| Header                                                    | Footer                                                    |
|-----------------------------------------------------------|-----------------------------------------------------------|
| ![header.png](./assets/fundamentals-1/screens/header.png) | ![footer.png](./assets/fundamentals-1/screens/footer.png) |


---------------------------------------

## Content Structure and Webfonts
In this challenge you will learn how to structure content in html documents and how to use headlines and semantic HTML5 elements.

### Hints and Guidelines
- Use HTML5 semantic sectioning elements to structure the content
- Correctly use HTML headlines h1 - h6
- Validate your HTML code!

### Resources
- HTML5 Standard on Sectioning Elements: [chapter 4.3 through 4.3.10](https://www.w3.org/TR/html5/sections.html#sections)
- Decision guide which HTML5 sectioning element to choose: [HTML5 Sectioning Flowchart](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)
- HTML5 suggests the so called [outline algorithm](https://www.w3.org/TR/html5/sections.html#outline) - but it's not implemented by any browser yet!
- Instead use the [basic rank of headlines](https://www.w3.org/TR/html5/sections.html#rank)
- MDN web docs on [Using HTML Sections and Outlines](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
- Adrian Roselli: [There Is No Document Outline Algorithm](http://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html)
- Dummy Text generator and origins and history of the "Lorem Ipsum" text: https://loremipsum.io/
- Dummy Image generator: https://dummyimage.com/.
- Use the [free webfont Lato](https://fonts.google.com/specimen/Lato) with font-weight 300, 400 and 700.
- W3C HTML5 Validator: https://validator.w3.org/

### Challenge
In this challenge you will learn how to structure content in html documents and how to use headlines and semantic HTML5 elements.

#### Basic page structure
Before adding the actual content to your html page, proceed with adding more semantic sectioning elements for further structuring of the content.

#### Headlines
Add HTML5 compliant headlines and sections to structure the content of your page.

#### Inner values matter!
Add dummy text and image content to your page, you can use dummy text and image generators for that.
With latter you can easily create dummy images like this:
<img src="https://dummyimage.com/320x180/eef1f5/0b5fff" alt="320x180" />

#### Add some Teasers to turn them on!

Often, a combination of an image, short text and a link -  a teaser - is used to tease users to related content on other pages.
Multiple of such teasers can be combined in a teaser row.

#### Related Content
Place related content in a marginal column on the right, again choose a matching semantic element to markup this area of additional content.
You can use CSS to adjust position and size of this area.

#### Code is not valid until proven valid!
To ensure your HTML code is valid and can be correctly interpreted by browsers, search engines and screen readers, validate your code with the W3C HTML Validator.
Fix the reported validation errors in your HTML code.

#### Screens

| All 320px                                                                                                     | Stage                                                          | Breadcrumb                                                               |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------------------|
| ![layout-320.png](../assets/fundamentals-1/screens/all-without-nav-and-documentlist-320.png ':size=autox600') | ![stage.png](./assets/fundamentals-1/screens/module-stage.png) | ![breadcrumb.png](./assets/fundamentals-1/screens/module-breadcrumb.png) |


| Section                                                                             | Form                                                                          | Contact Teaser                                                                 | Teasers                                                                             |
|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| ![section.png](./assets/fundamentals-1/screens/module-section.png ':size=autox600') | ![form.png](./assets/fundamentals-1/screens/module-form.png ':size=autox600') | ![contact.png](./assets/fundamentals-1/screens/module-contact.png ':size=150') | ![teasers.png](./assets/fundamentals-1/screens/module-teasers.png ':size=autox600') |

### Questions
- What are semantic elements in HTML5?
- When do you use which semantic element?
- Why is the correct hierarchy of headlines important?
- Should you use multiple h1 headlines in one HTML document?
- How do you include webfonts?
- Which webfont formats could be used? Why are there different formats?
- How can you provide different font weights and different font styles for a webfont?
- How are CSS stylesheets embedded?
- What is the purpose of normalize.css?
- What's the effect of specifity of CSS selectors?
- What has to be considered when declaring CSS selectors?
- What does !important do and why shouldn't you use it?
- What are vendor-prefixes and which ones do exist?
- What are pseudo elements? What is their purpose?
- What are shorthand properties? Which ones do exist?
- When do you use img tags and when CSS background images?
- What are the different position properties and what's their effect on surrounding elements?
- What is z-index and what's the effect?
- How can you place two block elements side by side?
- What is CSS box-model?
- What is CSS flex-box? When do you use it?

<br/>

---------------------------------------

## Navigation
In this Challenge you will learn how to build an accessible navigation and add the correct semantic elements and attributes.

### Hints and Guidelines
- Use HTML5 semantic elements to markup a navigation section
- Use a list structure for navigation links
- Add additional semantics for better accessibility

### Resources
- [WAI ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
- [WAI ARIA W3C Recommendation](https://www.w3.org/TR/wai-aria/)
- MDN web docs: [ARIA basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [NVDA screen reader](https://www.nvaccess.org)
- [Apple iOS VoiceOver](https://help.apple.com/iphone/11/?lang=en#/iph3e2e415f)

### Challenge
#### Navigation Links
Add navigation links to the header like depicted in the screen. When clicking these links, they should lead to the subheadlines of the sections of the page.
Also consider using a semantic element for the navigation and a sensible structure of elements for the link list.

#### Additional Semantics and Accessibility
In addition to semantic elements, semantic meaning can be added to normal html elements with so called "ARIA-attributes". They were introduced by the Web Accessibility Initiative (WAI) with the additional recommendation called "WAI ARIA" to make HTML more semantic and accessible to screen readers and search engines. You are encouraged to read more about ARIA in the WAI ARIA Overview and the WAI ARIA W3C Recommendation.

If you have a Mac or an iOS device, activate VoiceOver, let it read out your navigation and page structure and try to navigate in the webpage with VoiceOver.
If you don't have an Apple Device or operating system, get NVDA and try the same with NVDA.

If you recognize that something on your page does not work or is not accessible with screen readers, try to improve it and make it accessible.

And if you want to really judge a frontend web developer: just take his or her iPhone and tripple-click the home button ;-)

### Screens

| Navigation Links                                    | Navigation Links, hover                                                |
|-----------------------------------------------------|------------------------------------------------------------------------|
| ![nav.png](./assets/fundamentals-1/screens/nav.png) | ![conav-hoverntact.png](./assets/fundamentals-1/screens/nav-hover.png) |

### Questions
- Which semantic element should be used for page navigation?
- How can you add semantic meaning to any HTML elements?
- Why should semantic attributes be added to html elements?

---------------------------------------

## Responsive Webdesign
In this challenge you will learn how to implement a responsive web page.

### Hints and Guidelines
- Implement fluid design if possible
- Use media queries for breakpoints if required

### Resources
- Short introduction to the viewport meta tag: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
- Responsive design vs. adaptive design: https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/
- Introduction to media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- CSS Flex-Box: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Challenge
#### Make your web page responsive
Note the screens provided below. Spot the differences in the different screen sizes of the page layout. Enhance your page so that it fits the screens. Use flex-box to implement a responsive grid.

- Note the image on the page, which is surrounded by text on the desktop version.
- Note the teaser, which can have two or three columns.

Set the viewport meta tag.

#### Screens
import all480 from './assets/fundamentals-1/screens/all-480.png'
import all600 from './assets/fundamentals-1/screens/all-600.png'
import all768 from './assets/fundamentals-1/screens/all-768.png'
import all1024 from './assets/fundamentals-1/screens/all-1024.png'
import all1600 from './assets/fundamentals-1/screens/all-1600.png'


| 320px                                                                         | 480px                                                                         | 600px                                                                         |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| ![all-320.png](./assets/fundamentals-1/screens/all-320.png ':size=autox1000') | ![all-480.png](./assets/fundamentals-1/screens/all-480.png ':size=autox1000') | ![all-600.png](./assets/fundamentals-1/screens/all-600.png ':size=autox1000') |

| 768px                                                                         | 1024px                                                                          | 1600px                                                                          |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| ![all-768.png](./assets/fundamentals-1/screens/all-768.png ':size=autox1000') | ![all-1024.png](./assets/fundamentals-1/screens/all-1024.png ':size=autox1000') | ![all-1600.png](./assets/fundamentals-1/screens/all-1600.png ':size=autox1000') |


### Questions
- What is responsive design?
- What are media queries?
- How can you realize a responsive image?
- What do you use the viewport meta tag for?


---------------------------------------

## SVG Sprites
In this task you will learn what SVG sprites are and how to use them.

### Hints and Guidelines
1. Use SVG sprites instead of icon fonts
2. Clean up the SVGs before using them. Remove unnecessary markup that was added by graphic programs.
3. Create the SVG sprite by hand or use a tool like Icomoon: https://icomoon.io/app/#/select/image


### Resources
- Check out https://css-tricks.com/svg-sprites-use-better-icon-fonts/ to see how SVG sprites work.
- With Icomoon (https://icomoon.io/app/#/select/image) you can create SVG sprites.
- You can find the necessary SVG files for the single icons on https://icomoon.io/#preview-free.

### Challenge
#### Document list
Create the document list component with SVG sprites. Based on the document typ another SVG Icon is displayed.

#### Screens
![documentlist.png](./assets/fundamentals-1/screens/module-documentlist.png)

### Questions
- What is SVG?
- What are SVG sprites and how do you use them?
- What are the advantages of SVG sprites compared to icon fonts and pixel graphics?


<authors-component v-bind:authors="[
    {
      username: 'akrappe',
      name: 'Ann-Kristin Krappe'
    },
    {
      username: 'clemensf',
      name: 'Clemens Fiedler'
    },
    {
      username: 'stefanieneubert',
      name: 'Stefanie Neubert'
    },]"/>


---------------------------------------

_**Please take a moment to find something you can improve in this chapter.**_