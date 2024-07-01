# Applicant
Hello fellow developer. So, you came to prove yourself. Don't look any further. We have the perfect challenge for you!  
At Virtual Identity we are convinced about the web components standards (https://www.webcomponents.org/introduction). Therefore we use them in our daily work to build platform agnostic frontend ecosystems. We have a high quality standard for our work and therefore take **Security** and **Accessibility** seriously.

## What can you expect?

As part of our hiring process, we need to make sure, that your technical skills, as well as you ability to present your work, are on a level that fits our standards. Therefore we ask you to build a web component with the tools we regularly use (Lit and Storybook). We will evaluate your code quality, your ability to work with the given tools and your ability to present your work afterwards in an interview together.

## Why do we do this?

Our clients expect high quality work from us. We need to be able to understand client requirements and translate them into high quality code. We also need to be able to present our work to our clients. This challenge will help us to understand your skills in these areas.

## How long will it take?

We value your time and know that there is more things in live than work. Please take a maximum of four hours time for this coding challenge. We do not want you to work overtime!

## Prerequesites

We know that setup time can be a hassle. That's why we prepared everything already for you to directly start coding. We're using Vite as a starting point for your project. So please do the following in preparation of the coding challenge:

> ℹ️ Change `--template` to e. g. `react-ts`, `vue-ts`, `preact-ts` or `svelte-ts`, if you want to use another framework. Preferably we receive the coding challenge with `lit-ts`.

```bash
# 1. Create your vite-project with the lit-ts template
npm create vite@latest vi-coding-challenge -- --template lit-ts
cd vi-coding-challenge

# 2. Setup storybook
npx storybook@latest init
echo "import '../src/index.css';\n$(cat .storybook/preview.ts)" > .storybook/preview.ts.tmp && mv .storybook/preview.ts.tmp .storybook/preview.ts

# 3. Setup default lit-stories
# ℹ️ Only needed if you selected `lit-ts` as template in the first step
rm -rf ./src/stories
curl -L https://raw.githubusercontent.com/virtualidentityag/vi-frontend-hub/main/src/applicant/assets/main-element.stories.ts -o ./src/my-element.stories.ts

# 4. Run Storybook
npm run storybook

# 5. Before proceeding init a git repository and commit your changes
...
```

## Further Process
After you did this coding challenge, please share the link to your repository with us. We will review your code and setup a meeting with you to discuss your work. We will also ask you to present your work to us in this meeting. One of our developers will be present in this meeting to represent the client and ask you questions our clients typically ask us.

### Hints

-   We recommend having a look into [lit.dev](https://lit.dev/docs/) before starting the challenge.
-   We recommend using a syntax highlighter that works with Lit templates. [Check out this list](https://lit.dev/docs/tools/development/#ide-plugins) for IDE plugins.
-   We use Storybook to display the components we build. Having a look at their [Page](https://storybook.js.org/) might help you to create a story for your component

Now that you are ready:

<vi-button href="#/applicant/challenge">Let's go!</vi-button>
