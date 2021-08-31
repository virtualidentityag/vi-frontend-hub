import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';

const StyledButton = styled.a`
display: inline-block;
  padding: 20px;
  background-color: var(--theme-color,#42b983);
  border-radius: 10px;
  color: white !important;
  text-decoration: none;
`;

window.$docsify = window.$docsify || {};
window.$docsify.vueComponents = window.$docsify.vueComponents || {};
window.$docsify.vueComponents = {
  ...window.$docsify.vueComponents,
  'vi-button': StyledButton,
}
