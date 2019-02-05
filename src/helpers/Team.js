import styled from 'https://unpkg.com/vue-styled-components@1.4.4/dist/vue-styled-components.es.js';
import { team } from './fullTeam.js';

const StyledTeam = styled.div`
  margin-top: 3em;
`;

const Headline = styled.p`
  font-size: 1.5em;
`;

const Span = styled.span`
  font-style: italic;
  font-size: 1rem;
`;

Vue.component('team-component', {
  data: () => ({
    team
  }),
  components: {
    'styled-team': StyledTeam,
    'styled-headline': Headline,
    'styled-span': Span
  },
  template: `
    <styled-team>
      <styled-headline>Got questions? <styled-span>Core Collaborators:</styled-span></styled-headline>
      <author-component v-for="(member, idx) in team" v-bind:key="'author-' + idx" v-bind:username="member.username" v-bind:name="member.name"></author-component>
    </styled-team>`
});
