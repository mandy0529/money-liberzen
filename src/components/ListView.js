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
            <article key={id}>
              <h5>
                {eachYear} - {name && name}월
              </h5>
              {img &&
                img.map((image) => {
                  const {id, name, url} = image;
                  return <img key={id} src={url} alt={name} />;
                })}
            </article>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    margin: 0.7rem;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ListView;
