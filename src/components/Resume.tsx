import React, { Fragment } from 'react';
import styled from 'styled-components';
import {Link, Typography} from '@material-ui/core';
import {Section} from './Section';
import {resumeData, type ResumeData} from '../data/resumeData';

const ResumeContainer = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ListTitle = styled(Typography)`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const ListSubtitle = styled(Typography)`
  font-style: italic;
`;

const ListDescription = styled(Typography)`
  margin-top: 0.5rem;
`;

interface ExperienceListProps {
  experiences: ResumeData['experience'];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.company}>
          <Typography variant="subtitle1" component="p">
            <b>
              {exp.title}, {exp.company}
            </b>
            {' — '}
            <Link href={exp.link} target="_blank">
              {exp.location}
            </Link>
            {' | '}
            {exp.dates}
          </Typography>
          {exp.points.map((point) => (
            <Typography variant="body1" component="p" key={point}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• {point}
            </Typography>
          ))}
        </div>
      ))}
    </>
  );
};

const EducationList: React.FC<{education: ResumeData['education']}> = ({
  education,
}) => (
  <ul>
    {education.map((edu) => (
      <ListItem key={edu.school}>
        <ListTitle>{edu.degree}</ListTitle>
        <ListSubtitle>{edu.school}</ListSubtitle>
        <ListSubtitle>{edu.dates}</ListSubtitle>
      </ListItem>
    ))}
  </ul>
);

const ProficientSkillsList: React.FC<{
  skills: ResumeData['technicalSkills']['proficient'];
}> = ({skills}) => (
  <>
    {skills.map((skill, index) => (
      <Fragment key={skill.name}>
        {index > 0 && ', '}
        <a href={skill.link} target='_blank' rel='noopener noreferrer'>
          {skill.name}
        </a>
      </Fragment>
    ))}
  </>
);

const ExposureSkillsList: React.FC<{
  skills: ResumeData['technicalSkills']['exposure'];
}> = ({skills}) => (
  <>
    {skills.map((skill, index) => (
      <Fragment key={skill.name}>
        {index > 0 && ', '}
        <a href={skill.link} target='_blank' rel='noopener noreferrer'>
          {skill.name}
        </a>
      </Fragment>
    ))}
  </>
);

export const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <Section title='Skills'>
        <Typography variant='subtitle1'>Proficient:</Typography>
        <ProficientSkillsList skills={resumeData.technicalSkills.proficient} />
        <br />
        <Typography variant='subtitle1'>Exposure:</Typography>
        <ExposureSkillsList skills={resumeData.technicalSkills.exposure} />
      </Section>
      <Section title='Experience'>
        <ExperienceList experiences={resumeData.experience} />
      </Section>
      <Section title='Education'>
        <EducationList education={resumeData.education} />
      </Section>
    </ResumeContainer>
  );
};
