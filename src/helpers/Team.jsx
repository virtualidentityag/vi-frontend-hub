import React from 'react';
import styled from 'styled-components';
import Author from './Author';


import { team } from './Authors';

const Team = () => <StyledTeam>
  <Headline>Got questions? <Span>Core Collaborators:</Span></Headline>
  {team.map((author, idx) => <Author key={`author-${idx}`} {...author} />)}
</StyledTeam>

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


export default Team;
