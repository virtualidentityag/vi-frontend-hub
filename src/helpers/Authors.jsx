import React from 'react';
import styled from 'styled-components';

import Author from './Author';

const team = [
  {
    username: 'adrianfella',
    name: 'Adrian Fella'
  },
  {
    username: 'akrappe',
    name: 'Ann-Kristin Krappe'
  },
  {
    username: 'clemensf',
    name: 'Clemens Fiedler'
  },
  {
    username: 'koepferd',
    name: 'Deborah Köpfer'
  },
  {
    username: 'dweiger',
    name: 'Dominikus Weiger'
  },
  {
    username: 'jurekbarth',
    name: 'Jurek Barth'
  },
  {
    username: 'luke-m',
    name: 'Lukas Müller'
  },
  {
    username: 'SheepFromHeaven',
    name: 'Marc Emmanuel'
  },
  {
    username: 'rhafner',
    name: 'Ralf Hafner'
  },
  {
    username: 'stefanieneubert',
    name: 'Stefanie Neubert'
  },
]

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAll: false
    }
  }
  toggle() {
    this.setState({
      viewAll: !this.state.viewAll
    })
  }
  render() {
    const { authors } = this.props;
    const authorsString = JSON.stringify(authors);
    const filteredTeam = team.filter(author => authorsString.indexOf(author.username) === -1);
    const { viewAll } = this.state;
    return <StyledAuthors>
      <Headline>Got questions? <Span>Responsible for this section:</Span></Headline>
      {
        authors.map((author, idx) => <Author key={`author-${idx}`} {...author} />)
      }
      <Button viewAll={viewAll} onClick={() => this.toggle()}>View contributors</Button>
      {
        viewAll ? filteredTeam.map((author, idx) => <Author key={`author-${idx}`} {...author} />) : null
      }
    </StyledAuthors>
  }
}

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

const Button = styled.button`
  border: none;
  background: none;
  color: #0B5FFF;
  margin-bottom: 1em;
  position: relative;
  outline: none;
  &::after {
    content: '▶';
    position: absolute;
    right: -1em;
    top: 0.1em;
    transition: all 0.2s ease;
    transform: ${props => props.viewAll ? 'rotate(90deg)' : ''}
  }
`;


export default Authors;
