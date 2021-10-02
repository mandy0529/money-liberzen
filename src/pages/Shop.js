import React from 'react';
import styled from 'styled-components';
import {ShopBtn, ShopHero, ShopList, ShopSort} from '../components';

const Shop = () => {
  return (
    <main>
      <ShopHero />
      <Wrapper className="page">
        <div className="section-center products">
          <ShopBtn />
          <div>
            <ShopSort />
            <ShopList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default Shop;
