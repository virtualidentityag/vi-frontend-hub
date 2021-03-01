import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';

const StyledAuthor = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 0.7em;
`;

const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 1em;
`;


window.$docsify = window.$docsify || {};
window.$docsify.vueComponents = window.$docsify.vueComponents || {};
window.$docsify.vueComponents = {
  ...window.$docsify.vueComponents,
  'author-component': {
    props: ['username', 'name'],
    components: {
      'styled-author': StyledAuthor,
      'styled-img': Img
    },
    template: `
      <styled-author v-bind:href="'https://github.com/' + username" target="_blank">
        <styled-img v-bind:src="'https://avatars.githubusercontent.com/' + username" />
        <span>
          {{name}}
        </span>
      </styled-author>`
  }
}

Vue.component('author-component', {
  props: ['username', 'name'],
  components: {
    'styled-author': StyledAuthor,
    'styled-img': Img
  },
  template: `
    <styled-author v-bind:href="'https://github.com/' + username" target="_blank">
      <styled-img v-bind:src="'https://avatars.githubusercontent.com/' + username" />
      <span>
        {{name}}
      </span>
    </styled-author>`
});
