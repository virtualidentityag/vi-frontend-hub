# Biotope Ecosystem
Level: *Wise Walrus*

You now have all the knowledge to build great projects with biotope. The final step will be to improve biotope ongoingly.
This chapter will help you to get a brief overview of the biotope architecture and all the repositories that play a role in there.

Plus it will help you to get started in the open source world and prepare you to contribute to the wide world of free code.

## Open Source Resources
https://help.github.com/articles/finding-open-source-projects-on-github/

https://help.github.com/articles/about-labels/

## Chart
![biotope](./assets/biotope.jpg)

## Biotope Meeting Notes
https://github.com/biotope/meeting-notes

## Questions
01. How to open source?
<questions-component>
  <question-component>What is a fork?</question-component>
  <answer-component>A fork is a copy of a whole repositroy it enables you to work on a open project even though you do not have write access to it. The normal process on Opensource projects is: creating a fork -> make changes there -> PR back to the original repo</answer-component>
  <question-component>Why should you keep your Github profile clean and up to date?</question-component>
  <answer-component>You github profile is you social media profile as a developer. Future employers might take a look at it.</answer-component>
</questions-component>

02. What is the role of the package:
<questions-component>
  <question-component>biotope</question-component>
  <answer-component>The biotope cli tool is the starting point of your biotope experience. It brings together all the tools you can the use to start developing with biotope.</answer-component>
  <question-component>biotope-boilerplate</question-component>
  <answer-component>The biotope boilerplate is a blueprint for all new biotope projects. When you use the biotope cli tools <code>biotope generate</code> command, it will clone the biotope boilerplate</answer-component>
  <question-component>biotope-build</question-component>
  <answer-component>The biotope build package is included in every biotope boilerplate. It runs in the predefined folder structure and takes care of the development searver, as well as all the build/compile/transpile tasks.</answer-component>
  <question-component>biotope-element</question-component>
  <answer-component>Biotope Element is a base class for creating web components. It got some nice additional functionality, which we felt was missing.</answer-component>
  <question-component>biotope-configuration</question-component>
  <answer-component>Biotope configuration is a small state manager, being attached to the window, which helps you to load configurations from a json file and use them in your other scripts.</answer-component>
  <question-component>biotope-generator</question-component>
  <answer-component>The biotope generator provides some generator commands to the cli tool to generate new components.</answer-component>
  <question-component>biotope-resource-loader</question-component>
  <answer-component>The resource loader parses the DOM, extracts special resource urls and loads them, after the page is done loading.</answer-component>
</questions-component>

**Pair programming**:
To practice the new open source knowledge we are going to solve a biotope issue together.
Pair programming helps to fokus and solve problems efficiently


<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    }]"/>

---------------------------------------

_**Boy Scout Rule. Remember? ;-)**_