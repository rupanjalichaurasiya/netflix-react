import React from 'react';
import styled from 'styled-components';

export default function BackgroundImage() {
  return (
    <BackgroundContainer>
      <img
        src='https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg'
        alt='no internet connection'
      />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;

  img {
    height: 100vh;
    width: 100vw;
  }
`;
