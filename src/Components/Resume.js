import React from 'react';
import styled from 'styled-components';
import ResumeItem from './ResumeItem';
import SubTitle from './SubTitle';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
function Resume() {
  return (
    <ResumeStyled>
      <SubTitle Icon={WorkIcon} text={'Professional Experience'} />
      <div className='container'>
        <ResumeItem
          title={'data engineer | TrouveTaVoie'}
          subtitle={
            'Apache Storm | StormCrawler | Elasticsearch | Docker | FastApi'
          }
          year={'Feb 2021 - June 2021'}
          desc={
            'Development of a web scraper that targets job offer websites by Establish the appropriate topology with our VM capabilities and project scale & Developing and containerize an API to make our project accessible to users..'
          }
        />
        <ResumeItem
          title={'fullstack developer | TrouveTaVoie'}
          subtitle={'Node.js | React | Express.js | MongoDB | Docker'}
          year={'June 2020 - Sept 2020'}
          desc={
            'Development of a web application dedicated to the HR department to facilitate the management of its resources in an agile environment.'
          }
        />
        <ResumeItem
          title={'web developer | HARD NORD '}
          subtitle={'Laravel | JQuery | Mysql | Bootstrap'}
          year={'June 2019 - August 2019'}
          desc={"Refinement of the company's intranet site."}
        />
      </div>
      <SubTitle Icon={SchoolIcon} text={'Education'} className='last' />
      <div className='container'>
        <ResumeItem
          title={'National School of Applied Sciences'}
          subtitle={'State engineering degree in computer science'}
          year={'2015 - 2021'}
          desc={
            'I learned during the two years of preparatory cycle algebra, analysis, mechanics, algorythmics, statistics and more... During the engineering cycle my studies covered numerous computer science domains like web/mobile developement, security, Database administration among others'
          }
        />
        <ResumeItem
          title={'Baraim Er Razi - high school'}
          subtitle={
            'baccalaureate of Science in Mathematics - Engineering sciences option'
          }
          year={'2014 - 2015'}
          desc={
            'My senior year of highschool set the foundation of my universities studies'
          }
        />
      </div>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.div`
  .container:not(:last-child) {
    margin-bottom: 4rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-left: 2px solid var(--white-color);
    border-radius: 1px;
    padding-left: 1rem;
  }
  .last {
    padding-top: 2rem !important;
  }
`;

export default Resume;
