import styled, { keyframes } from 'styled-components';

const anim = keyframes`
0% {    
    transform: rotateZ(0);
  }
20% {
    transform: rotateZ(-15deg);
  }
  80% {
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
    height: 920px;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  top: -40px;
  right: 5px;
  transform-origin: 25% 85%;
  animation-name: ${anim};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: -80px;
    right: 100px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    top: -80px;
    right: -20px;
  }
`;

export const CatImage = styled.img`
  position: absolute;
  top: 170px;
  right: 5px;

  transform-origin: 30% 70%;
  animation-name: ${anim};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 450px;
    right: 160px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 450px;
    right: 30px;
  }
`;

export const DoggyImage = styled.img`
  position: absolute;
  top: 80px;
  right: 148px;

  transform-origin: 65% 80%;
  animation-name: ${anim};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 240px;
    right: 478px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 240px;
    right: 358px;
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
    margin-top: 228px;
    width: 500px;
  }
`;
