import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import TopNav from '../components/TopNav';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
//import Card from '../components/Card';
import SliderContainer from '../components/SliderContainer';

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: 'all' }));
    }
  }, [dispatch, generesLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
    return () => (window.onscroll = null);
  };
//console.log(movies)
  return (
    <HeroContainer isScrolled={isScrolled}>
      <TopNav isScrolled={isScrolled} />
      <div className="hero">
        <div className="background-image">
          <img
            src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
            alt="no internet connection"
          />
        </div>
        <div className="container">
          <div className="title">
            <h1>Superman</h1>
            <p>
              He says, "with great power comes great responsibility,<br />
              " which means he has to use his power to help people.<br />
              Spiderman has a cool red and blue ...
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate('/player')} className="playBtn">
              <FaPlay /> Play
            </button>
            <button className="moreBtn">
              <AiOutlineInfoCircle /> More
            </button>
          </div>
        </div>
      </div>
   <SliderContainer movies={movies} />
   
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.isScrolled &&
    `
    background-color: #111;
  `}

  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 90vh;
      width: 100%;
      object-fit: cover;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      margin-left: 3rem;

      .title {
        h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1rem;
        }
      }

      .buttons {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;

        button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;

          svg {
            font-size: 1.2rem;
          }

          &.playBtn {
            background-color: red;
            color: white;
          }

          &.moreBtn {
            background-color: transparent;
            color: white;
            border: 1px solid white;
          }
        }
      }
    }
  }
`;

export default Netflix;
