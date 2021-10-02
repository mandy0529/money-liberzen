import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import video from '../assets/backback.mp4';

const Touch = () => {
  return (
    <Wrapper className="section ">
      <section class="connect">
        <video
          className="video-container"
          src={video}
          playsInline
          muted={true}
          autoPlay={true}
          loop
        />
      </section>
      <div class="video-banner">
        <div class="section-title">
          <h2>let's get in touch</h2>
          <div class="underline"></div>
        </div>
        <Link className="btn" to="/contact">
          contact me
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 80vh;

  @media (min-width: 992px) {
    margin-top: 0rem;
    height: calc(100vh - 5rem);
    place-items: center;
  }
`;
export default Touch;
