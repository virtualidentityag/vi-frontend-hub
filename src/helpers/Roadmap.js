import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';

const StyledItem = styled.div`
  & {
    padding: calc(50px + 1em) 0 1em 20px;
    box-sizing: border-box;
    position: relative;
    border-left: 4px solid #34495e;
    color: #858585;
    margin: 0;
  }
  &:first-of-type {
    padding: calc(25px + 1em) 0 1em 20px;
  }
  &:after {
    content: '';
    width: 21px;
    height: 21px;
    display: block;
    border-radius: 50%;
    background: var(--theme-color,#42b983);
    position: absolute;
    top: calc((50px - 1em) / 2);
    left: -12px;
    box-sizing: border-box;
    border: 3px solid white;
  }
  &:first-of-type:before {
    height: 25px;
  }
  &:first-of-type:after {
    top: 0;
    transform: translate(0, -50%);
  }
  &:last-of-type:before {
    content: '';
    width: 10px;
    box-sizing: border-box;
    border-top: 20px solid var(--theme-color,#42b983);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    bottom: 0;
    transform: translate(-50%, 50%);
    left: -2px;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
  }
`;


Vue.component('roadmap-component', {
  components: {
    'styled-item': StyledItem
  },
  template: `
    <styled-item v-markdown>
      <slot/>
    </styled-item>`
});
