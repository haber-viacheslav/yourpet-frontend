import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0% {    
    transform: rotateZ(0);
  }
40% {
    transform: rotateZ(-15deg);
  }
  60% {
    transform: rotateZ(-15deg);
  }
100% {
    transform: rotateZ(0);
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;

  @media screen and (${props => props.theme.media.md}) {
    gap: 27px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    flex-direction: row;
    gap: 27px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  /* overflow: hidden; */
  top: 108px;
  right: -60px;
  width: 474px;
  height: 394px;

  @media screen and (${props => props.theme.media.md}) {
    top: 200px;
    right: -260px;
    width: 1085px;
    height: 918px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    top: 30px;
    right: 0;
    width: 917px;
    height: 800px;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 0% 100%;
  /* animation-name: ${anim}; */
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 40px;
    right: 160px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    top: -35px;
    right: -40px;
  }
`;

export const CatImage = styled.img`
  position: absolute;
  top: 215px;
  right: 45px;

  transform-origin: 0% 50%;
  /* animation-name: ${anim}; */

  animation-duration: 5s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 490px;
    right: 250px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 405px;
    right: 50px;
  }
`;

export const DoggyImage = styled.img`
  position: absolute;
  top: 130px;
  right: 243px;

  transform-origin: 100% 100%;
  animation-name: ${anim};

  animation-duration: 5s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 320px;
    right: 665px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 230px;
    right: 463px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 32px;
  line-height: 1.37;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (${props => props.theme.media.lg}) {
    line-height: 1.3;
    margin-top: 159px;
    width: 500px;
  }
`;
