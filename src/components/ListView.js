import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';

const ListView = ({eachYear}) => {
  const {clothes} = useGlobalContext();

  return (
    <Wrapper>
      {clothes &&
        clothes.map((item) => {
          const {id, name, img} = item;
          return (
            <main key={id} className="main-container">
              <h4>{name}</h4>

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
    text-align: center;
    border-bottom: 1px dotted black;
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: black;
  }

  img {
    width: 90px;
    border-radius: 5px;
    margin: 0.4rem;
    box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -webkit-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
    -moz-box-shadow: 2px 4px 7px -2px rgba(66, 62, 62, 0.75);
  }

  @media (min-width: 768px) {
    img {
      width: 220px;
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ListView;
