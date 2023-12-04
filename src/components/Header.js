import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className='logo'> 
        <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='no internet connection' />
      </div>
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;

  .logo {
    img {
      height: 3rem; /* Adjust the height as per your requirement */
      cursor: pointer;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;

export default Header;
