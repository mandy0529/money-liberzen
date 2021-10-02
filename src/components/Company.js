import React from 'react';
import styled from 'styled-components';
import {ImArrowDown} from 'react-icons/im';

import fashion1 from '../assets/fashion1.jpeg';

const Company = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Company</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          <div className="logo-info">
            <img src={fashion1} alt="black-logo" />
            <div className="logo-desc">
              <h3>Founded | 2021 . 08</h3>
              <h3>CEO | 서 미 령</h3>
              <p>
                liberty + Citizen <br />
                <ImArrowDown />
                <br />
                LIBERZEN <br /> 자유를 추구하는 현대 도시인을 위한 옷을
                만듭니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  */ .title {
    h2 {
      letter-spacing: 4px;
    }
  }
  .featured {
    margin: 4rem auto;

    img {
      width: 300px;
      height: 400px;
    }
  }
  h2 {
    display: none;
  }

  .logo-info {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 30px;
      font-size: 25px;
    }
  }
  .logo-info:first-child {
    margin-bottom: 4rem;
  }
  .underline {
    width: 8rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    margin-top: 2rem;
    background: teal;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .logo-desc {
    margin-top: 3rem;
  }
  @media (min-width: 576px) {
    .featured {
    }
    .logo-info {
      flex-direction: row;
    }
    h2,
    .underline {
      display: block;
    }
  }
`;

export default Company;
