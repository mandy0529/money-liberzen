import React from 'react';
import styled from 'styled-components';
import {clothes} from '../utils/constants';

const Timeline = () => {
  return (
    <Wrapper className="section-center">
      <section class="section timeline">
        <div class="section-title">
          <h2>timeline</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center timeline-center">
          {clothes.map((item) => {
            const {text, year, number} = item;
            return (
              <article class="timeline-item">
                <h4>{year}</h4>
                <p>{text}</p>
                <span class="number">{number}</span>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 1.25rem auto;
    background: teal;
  }
  .cloth-img {
    width: 250px;
    height: 200px;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Timeline;
