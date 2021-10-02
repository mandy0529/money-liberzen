import React from 'react';
import styled from 'styled-components';
import {contact} from '../assets';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <Wrapper>
      <section className="connect">
        <img className="video-container" src={contact} alt="contact" />
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <div>
            <span> LIBERZEN</span>
            <h5>T : 02-2254-2361</h5>
            <h5>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
              >
                <FaFacebookSquare className="navbar-info_icon facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/liberzen/"
              >
                <FaInstagram className="navbar-info_icon insta" />
              </a>
            </h5>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  margin-top: 50px;
  color: #463f3a;

  .underline {
    width: 8rem;
    height: 0.25rem;
    margin: 2rem auto 2rem auto;
    background: #463f3a;
  }
  div {
    letter-spacing: 0.2rem;
  }
  span {
    font-weight: bold;
    letter-spacing: 0.4rem;
    margin: 0;
    font-size: 2.5rem;
  }
  h5 {
    margin: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    text-transform: none;
    line-height: 1.25;
  }
  a {
    margin: 5px;
    font-size: 2.3rem;
    color: #463f3a;
    &:hover .facebook,
    &:hover .insta {
      transform: scale(0.96);
      opacity: 0.7;
    }
  }
  .video-banner {
    padding: 1rem;
    h5,
    span {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    /* grid-template-columns: 1fr 1fr;
    gap: 8rem; */
    .video-banner {
      padding: 3rem 5rem 3rem 5rem;
      h5,
      span {
        font-size: 2.2rem;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;
export default Contact;
