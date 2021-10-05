import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';

const GridView = () => {
  const {clothes} = useGlobalContext();

  return (
    <Wrapper>
      {clothes &&
        clothes.map((item) => {
          const {id, name, img} = item;
          return (
            <main className="main-container" key={id}>
              <h5>{name && name}</h5>
              {img &&
                img.map((image) => {
                  const {id, name, url} = image;
                  return <img key={id} src={url} alt={name} />;
                })}
            </main>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-container {
    border-bottom: 1px dotted black;
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: black;
    text-align: center;
  }
  img {
    width: 300px;
    height: 100%;
    border-radius: 5px;
    margin: 0.7rem;
    box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -webkit-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -moz-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
  }

  @media (min-width: 768px) {
    .main-container {
      text-align: left;
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
  @media (min-width: 1170px) {
  }
`;

export default GridView;
