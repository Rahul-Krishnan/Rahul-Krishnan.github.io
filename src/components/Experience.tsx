import {Typography} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

interface Props {
  company: string;
  link: string;
  title: string;
  location: string;
  dates: string;
  points: string[];
}

const ExperienceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const ExperienceHeader = styled(Typography)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ExperienceLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExperiencePoints = styled.ul`
  list-style-type: disc;
  margin-top: 0;
  margin-left: 1.5rem;
  li {
    margin-top: 0.5rem;
  }
`;

export const ExperienceItem: React.FC<Props> = ({
  company,
  link,
  title,
  location,
  dates,
  points,
}) => (
  <ExperienceItemContainer>
    <ExperienceHeader variant='h6'>
      <ExperienceLink href={link} target='_blank' rel='noopener noreferrer'>
        {company}
      </ExperienceLink>
      <Typography variant='subtitle1'>{dates}</Typography>
    </ExperienceHeader>
    <Typography variant='subtitle1'>{title}</Typography>
    <Typography variant='subtitle2' color='textSecondary'>
      {location}
    </Typography>
    <ExperiencePoints>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ExperiencePoints>
  </ExperienceItemContainer>
);
