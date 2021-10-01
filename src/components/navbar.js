import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from '../context/AppContext';
import NavList from './NavList';

const Navbar = () => {
  const {openSidebar} = useGlobalContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <h2>Liberzen</h2>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <NavList />
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
    h2 {
      color: white;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: white;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        transition: all 300ms linear;
        &:hover {
          transform: scale(1.09);
        }
      }
      a {
        color: white;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
