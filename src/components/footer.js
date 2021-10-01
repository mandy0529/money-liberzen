import React from 'react';
import styled from 'styled-components';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        &copy; {new Date().getFullYear()}
        <span> Liberzen</span>
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
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: teal;
  text-align: center;
  color: white;
  span {
    color: color;
    font-size: 1.3rem;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  a {
    margin: 5px;
    font-size: 1.5rem;
    color: white;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
