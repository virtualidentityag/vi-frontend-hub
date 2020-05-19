# Automation Process
Level: *Groovy Gorilla*

<img src="./assets/gorilla_badge.svg" width="30%" height="auto" alt="groovy_gorilla">

Last chapter you have got more insights in our Biotope Ecosystem and now you are able to use it in our projects and help us improving it. That's great! In this chapter you will learn more about automation and the automation tool GitHub Actions.

> Goal: You know how to implement an automated workflow with GitHub Actions in your projects.

---
## Preparation
Developer and operations are no longer the exclusive responsibility of DevOps engineers alone. Today, Frontend Developers help to reshape the form and the way process occurs within their projects improving collaboration between Frontends, Backends, and Stakeholders themselves.

Testing, building, authenticating and deploying software can be done in a more smooth and automatic way by implementing principles of **Continuous Integration and Continuous Delivery** (CI/CD, for short).

Automation tools like Jenkins or GitHub Actions make it simpler to bootstrap the workflow you want and to seamlessly integrate on your project of preference. Since 2019, **VI** uses GitHub to maintain its codebase, so this topic will be more focused on how to understand and create your own GitHub Actions.

---
## Introducing GitHub Actions

GitHub Actions is a flexible and scalable way of automating every aspect of your team's software workflow, as in:

  - Automated Testing (CI)
  - Continuous Delivery and Deployment
  - Responding to workflow triggers (issues, @mentions, labels and much more)
  - Triggering code reviews
  - Managing Branches
  - Triggering Issues and PR's

In this chapter, we're going to understand how they work, and how to create your own.

### Hints and Guidelines

#### Actions and Workflows

There are two components to use GitHub Actions:
  - The action itself
  - A workflow that uses actions

A workflow can have as many actions as needed and each action has it's own purpose.

#### Types of Actions

Actions come in two flavours: **"Container Actions"** and **"JavaScript Actions"**

**Container Actions**

Docker Container actions have the advantage of being packaged with the GitHub Actions code and can only execute in the **GitHub-Hosted Linux Environment**. The development of this type of action requires a previous understanding of how Docker works. For more information click [here](https://help.GitHub.com/en/actions/automating-your-workflow-with-GitHub-actions/creating-a-docker-container-action)

**JavaScript Actions**

It is the same as above, but with the environment decoupled from GitHub allowing faster execution but also accepting great dependency management responsability. For this onboarding document, let's focus on this type of Action, and straight to work!

### Resources

- [GitHub Actions Documentation](https://help.GitHub.com/en/actions)

## Challenge
#### Start your workflow file

On your repository create a `.GitHub/workflows/main.yml` file and add the following code inside:

```yml
name: My Simple Workflow
on: push
```

Feeling lost? Don't worry, I will tell you what you did!

`name` sets the workflow name. This name will appear on each and every Pull Request or in your Actions Tab. Rename it whatever you want! It's really important when you have multiple workflows on your repository.

`on: push` means that your workflow will only execute when code is pushed in your repository. i.e, using the `push` event.

It doesn't seem much, right? So let's add some more jobs to this workflow! 💼

Inside your `./GitHub/workflows/main.yml` append:

```yml
jobs:
  build:
    name: My Simple Workflow
    runs-on: ubuntu-latest    
    steps:
    - uses: actions/checkout@v1
      env:
        MY_NAME: "Groovy Gorilla"
```

Nice job so far! Let's get into more detail on what you just did:

`jobs` is the base component of a workflow run

`build` is the identifier of where you're attaching this job

`name` is the name of the job which will be displayed in your Actions tab when the workflow is running

`steps` the sequence of operations that make up a job

`uses: actions/checkout@v1` reference a community action called checkout and it's content's repository

`env` is used to specify the environment variables that will be available to your action in runtime


#### Keeping a secret 🗝️

The internet is a volatile thing, and sometimes you just need to keep information to yourself. If you don't feel like sharing your tokens, passwords or sensible information don't worry, I got you covered!

On your project's navigation tab select **Settings** and then, on your left sidebar click on **Secrets**.
The **Secrets** tab will show you a simple key/value pair where you can safely store all sensible information relevant to your project. To reference these on your workflow simply add:

```yml
jobs:
  build:
    name: My Simple Workflow
    runs-on: ubuntu-latest    
    steps:
    - uses: actions/checkout@v1
      env:
        MY_NAME: "Groovy Gorilla"
        TOKEN: ${{secrets.MY_SUPER_SECRET_STORED_KEY}}
```

Still don't know how this .yml works? click [here](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)

If this section stimulated your curiosity and you want to find out more, click [here](https://help.GitHub.com/en/actions/automating-your-workflow-with-GitHub-actions/creating-a-javascript-action)

### Questions

- What are the benefits of CD/CI?

<authors-component v-bind:authors="[
    {
      username: 'SheepFromHeaven',
      name: 'Marc Emmanuel'
    },]"/>
