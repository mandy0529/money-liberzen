import React from 'react';
import styled from 'styled-components';
import logoGold from '../assets/logoGold.png';
import logoBlack from '../assets/logoBlack.png';
const Label = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>LABEL</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          <div className="logo-info">
            <div className="logo-desc">
              <h3>Beige Label</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                dolores.
              </p>
            </div>
            <img src={logoGold} alt="gold-logo" />
          </div>
          <div className="logo-info">
            <div className="logo-desc">
              <h3>Black Label</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                dolores.
              </p>
            </div>
            <img src={logoBlack} alt="black-logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-9);

  .title {
    h2 {
      letter-spacing: 4px;
    }
  }
  .featured {
    margin: 4rem auto;

    img {
      height: 105px;
    }
  }
  .logo-info {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 0;
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
  @media (min-width: 576px) {
    .logo-info {
      flex-direction: row;
    }
  }
`;

export default Label;
