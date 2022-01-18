import React from 'react';
import { InnerLayout, MainLayout } from '../Styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import Blog from '../Components/Blog';
import js from '../img/blog/js.jpg';
import css from '../img/blog/css.jpeg';
import next from '../img/blog/next.jpeg';
import rest from '../img/blog/rest.png';

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={'Blog'} subtitle={'Blog'} />
        <InnerLayout>
          <h4 className='desc-text'>
            What better way to <span>know me</span> than to read my blogs ? Have
            a look at my point of views and <span>share</span> with me your
            thoughts !
          </h4>
          <div className='container'>
            <Blog
              img={js}
              text={
                'JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features'
              }
              date={'23/12/2021'}
            />
            <Blog
              img={css}
              text={
                'Daily articles about CSS and all things related to web design and development.'
              }
              date={'15/01/2022'}
            />
            <Blog
              img={next}
              text={'Next Js simplified and concretized'}
              date={'19/11/2021'}
            />
            <Blog
              img={rest}
              text={'Daily dose of Node Js and REST'}
              date={'18/01/2022'}
            />
          </div>
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  position: relative;
  .container {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default BlogsPage;
