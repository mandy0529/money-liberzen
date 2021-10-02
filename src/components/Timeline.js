import React from 'react';
import styled from 'styled-components';
import {clothes} from '../utils/constants';

const Timeline = () => {
  return (
    <Wrapper className="section-center">
      <section className="section timeline">
        <div className="section-title">
          <h2>timeline</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          {clothes.map((item) => {
            const {id, text, year, number} = item;
            return (
              <article key={id} className="timeline-item">
                <h3>{year}</h3>
                <p>{text}</p>
                <span className="number">{number}</span>
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
  color: #463f3a;
  p {
    color: #463f3a;
    font-size: 23px;
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 1.25rem auto;
    background: #463f3a;
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
