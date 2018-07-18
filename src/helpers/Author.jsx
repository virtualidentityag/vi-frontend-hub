import React from 'react';
import styled from 'styled-components';


const Author = ({ username = 'jurekbarth', name = 'Jurek Barth' }) =>
  <StyledAuthor href={`https://github.com/${username}`} target="_blank">
    <Img src={`https://avatars.githubusercontent.com/${username}`} />
    <span>
      {name}
    </span>
  </StyledAuthor>

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

export default Author;
