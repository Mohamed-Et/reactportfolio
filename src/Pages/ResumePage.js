import React from 'react';
import styled from 'styled-components';
import Skills from '../Components/Skills';
import Title from '../Components/Title';
import { MainLayout, InnerLayout } from '../Styles/Layouts';
import Resume from '../Components/Resume';
function ResumePage() {
  return (
    <MainLayout>
      <ResumeStyled>
        <Title title={'Skills'} subtitle={'Skills'} />
        <InnerLayout>
          <Skills />
        </InnerLayout>
        <Title title={'Resume'} subtitle={'Resume'} />
        <InnerLayout>
          <Resume />
        </InnerLayout>
      </ResumeStyled>
    </MainLayout>
  );
}

const ResumeStyled = styled.section`
  position: relative;
`;

export default ResumePage;
