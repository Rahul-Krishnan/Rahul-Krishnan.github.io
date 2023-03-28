import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface Props {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper = styled.div`
  margin-top: 3rem;
`;

const SectionHeader = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &::after {
    content: '';
    flex-grow: 1;
    margin-left: 1rem;
    height: 1px;
    background-color: #333;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Section: React.FC<Props> = ({ title, children }) => (
  <SectionWrapper>
    <SectionHeader variant="h5">{title}</SectionHeader>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);
