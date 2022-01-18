import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
function Skills() {
  return (
    <SkillsStyled>
      <ProgressBar title={'React Js'} progress={'95%'} width={'95%'} />
      <ProgressBar title={'Next Js'} progress={'80%'} width={'80%'} />
      <ProgressBar title={'Redux'} progress={'85%'} width={'85%'} />
      <ProgressBar title={'CSS3'} progress={'90%'} width={'90%'} />
      <ProgressBar title={'Node Js'} progress={'85%'} width={'85%'} />
      <ProgressBar title={'Express Js'} progress={'80%'} width={'80%'} />
      <ProgressBar title={'PHP'} progress={'70%'} width={'70%'} />
      <ProgressBar title={'JAVA'} progress={'70%'} width={'70%'} />
    </SkillsStyled>
  );
}

const SkillsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.75rem;
  grid-column-gap: 1.5rem;
`;

export default Skills;
