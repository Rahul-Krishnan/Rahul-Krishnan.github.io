import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Typography variant="h2" component="h1" gutterBottom>
        Rahul Krishnan
      </Typography>
      <Typography variant="subtitle1" component="p">
        San Francisco, CA | 917.558.2174 |{' '}
        <a href="mailto:rk2211@gmail.com">rk2211@gmail.com</a> |{' '}
        <a href="https://www.linkedin.com/in/rahul-krishnan/">linkedin.com/in/rahul-krishnan</a>
      </Typography>
    </HeaderContainer>
  );
};
