import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';

const StyledQuestions = styled.ul`
  
`;

const StyledQuestion = styled.li`
  
`;

const StyledAnswer = styled.blockquote`
  margin-bottom: 1em;
`;


Vue.component('questions-component', {
  components: {
    'styled-questions': StyledQuestions
  },
  template: `
    <styled-questions>
      <slot></slot>
    </styled-questions>`
});

Vue.component('question-component', {
  components: {
    'styled-question': StyledQuestion,
  },
  template: `
    <styled-question>
      <slot></slot>
    </styled-question>`
});

Vue.component('answer-component', {
  data: function () {
    return {
      display: window.location.search.indexOf('cheatmode') !== -1
    }
  },
  components: {
    'styled-answer': StyledAnswer,
  },
  template: `
    <styled-answer v-if="display">
      <slot></slot>
    </styled-answer>`
});
