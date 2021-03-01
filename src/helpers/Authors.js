import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';
import { team } from './fullTeam.js';

const StyledAuthors = styled.div`
  margin-top: 3em;
`;

const Headline = styled.p`
  font-size: 1.5em;
`;

const Span = styled.span`
  font-style: italic;
  font-size: 1rem;
`;

const buttonProps = { viewAll: Boolean };

const Button = styled('button', buttonProps)`
  border: none;
  background: none;
  color: #0B5FFF;
  margin-bottom: 1em;
  position: relative;
  outline: none;
  cursor: pointer;
  &::after {
    content: '▶';
    position: absolute;
    right: -1em;
    top: 0.1em;
    transition: all 0.2s ease;
    transform: ${props => props.viewAll ? 'rotate(90deg)' : ''}
  }
`;


window.$docsify = window.$docsify || {};
window.$docsify.vueComponents = window.$docsify.vueComponents || {};
window.$docsify.vueComponents = {
  ...window.$docsify.vueComponents,
  'authors-component': {
    data: function () {
      const authorsString = JSON.stringify(this.authors);
      return {
        viewAll: false,
        nonAuthors: team.filter(author => authorsString.indexOf(author.username) === -1)
      }
    },
    props: ['authors'],
    components: {
      'styled-authors': StyledAuthors,
      'styled-headline': Headline,
      'styled-span': Span,
      'styled-button': Button
    },
    template: `
      <styled-authors>
        <styled-headline>Got questions? <styled-span>Responsible for this section:</styled-span></styled-headline>
        <author-component v-for="(author, idx) in authors" v-bind:key="'author-' + idx" v-bind:username="author.username" v-bind:name="author.name" />
        <styled-button v-if="nonAuthors.length > 0" v-bind:viewAll="viewAll" v-on:click="viewAll = !viewAll">View contributors</styled-button>
        <author-component v-if="viewAll" v-for="(author, idx) in nonAuthors" v-bind:key="'non-author-' + idx" v-bind:username="author.username" v-bind:name="author.name" />
      </styled-authors>`
  }
}

Vue.component('authors-component', {
  data: function () {
    const authorsString = JSON.stringify(this.authors);
    return {
      viewAll: false,
      nonAuthors: team.filter(author => authorsString.indexOf(author.username) === -1)
    }
  },
  props: ['authors'],
  components: {
    'styled-authors': StyledAuthors,
    'styled-headline': Headline,
    'styled-span': Span,
    'styled-button': Button
  },
  template: `
    <styled-authors>
      <styled-headline>Got questions? <styled-span>Responsible for this section:</styled-span></styled-headline>
      <author-component v-for="(author, idx) in authors" v-bind:key="'author-' + idx" v-bind:username="author.username" v-bind:name="author.name" />
      <styled-button v-if="nonAuthors.length > 0" v-bind:viewAll="viewAll" v-on:click="viewAll = !viewAll">View contributors</styled-button>
      <author-component v-if="viewAll" v-for="(author, idx) in nonAuthors" v-bind:key="'non-author-' + idx" v-bind:username="author.username" v-bind:name="author.name" />
    </styled-authors>`
});
