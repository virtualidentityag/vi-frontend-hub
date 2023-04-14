# Applicant

Hello fellow developer. So, you came to prove yourself. Don't look any further. We have the perfect challenge for you!  
At Virtual Identity we are convinced about the web components standards. Therefore we use them in our daily work to build platform independent frontend ecosystems. We have a high quality standard for our work and therefore take SEO and Accessibility seriously. Your challenge will be to build a web component with Lit and Storybook.

## Timebox

Please take a maximum of eight hours time for this challenge. We do not want you to work overtime!

## Preparations

We're using Vite as a starting point for your project. So please do the following in preparation of the challenge:

```bash
# 1. Create your vite-project
# ℹ️ Seniors: Use any TypeScript-template you would like to use, preferably lit-ts
npm create vite@latest vi-coding-challenge -- --template lit-ts
cd vi-coding-challenge

# 2. Setup storybook
npx storybook@latest init
echo "import '../src/index.css';\n$(cat .storybook/preview.ts)" > .storybook/preview.ts.tmp && mv .storybook/preview.ts.tmp .storybook/preview.ts

# 3. Setup default lit-stories
# ℹ️ Seniors: Only needed if you selected lit-ts
rm -rf ./src/stories
curl -L https://raw.githubusercontent.com/virtualidentityag/dev-fe-onboarding/main/src/applicant/src/my-element.stories.ts -o ./src/my-element.stories.ts

# 4. Run Storybook
npm run storybook

# 5. Before proceeding init a git repository and commit your changes
...
```

### Hints

-   We recommend having a look into [lit.dev](https://lit.dev/docs/) before starting the challenge.
-   We recommend using a syntax highlighter that works with Lit templates. [Check out this list](https://lit.dev/docs/tools/development/#ide-plugins) for IDE plugins.
-   We use Storybook to display the components we build. Having a look at their [Page](https://storybook.js.org/) might help you to create a story for your component

Now that you are ready:

<vi-button href="#/applicant/challenge">Let's go!</vi-button>
