import styled, { keyframes } from 'styled-components';

const anim1 = keyframes`
0% {    
    transform: rotateZ(0) scale(1);
  }
16.7% {
    transform: rotateZ(0) scale(1.05);
  }
33.4% {
    transform: rotateZ(0) scale(1);
  }
  50.1% {
    transform: rotateZ(0) scale(1);
  }
  66.6% {
    transform: rotateZ(0) scale(1);
  }
 83.3% {
    transform: rotateZ(0) scale(1);
  }
100% {
    transform: rotateZ(0) scale(1);
  }
`;

const anim2 = keyframes`
0% {    
    transform: rotateZ(0) scale(1);
  }
16.7% {
    transform: rotateZ(0) scale(1);
  }
33.4% {
    transform: rotateZ(0) scale(1);
  }
  50.1% {
    transform: rotateZ(0) scale(1.05);
  }
  66.6% {
    transform: rotateZ(0) scale(1);
  }
 83.3% {
    transform: rotateZ(0) scale(1);
  }
100% {
    transform: rotateZ(0) scale(1);
  }
`;

const anim3 = keyframes`
0% {    
    transform: rotateZ(0)  scale(1);
  }
16.7% {
    transform: rotateZ(0) scale(1);
  }
33.4% {
    transform: rotateZ(0) scale(1);
  }
  50.1% {
    transform: rotateZ(0) scale(1);
  }
  66.6% {
    transform: rotateZ(0) scale(1);
  }
 83.3% {
    transform: rotateZ(0) scale(1.05);
  }
100% {
    transform: rotateZ(0) scale(1);
  }
`;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;

  @media screen and (${props => props.theme.media.md}) {
    gap: 27px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    flex-direction: row;
    gap: 27px;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  top: 108px;
  right: -68px;
  transform-origin: 0% 100%;
  animation-name: ${anim2};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  pointer-events: none;
  @media screen and (${props => props.theme.media.md}) {
    top: 240px;
    right: -100px;
  }

  @media screen and (${props => props.theme.media.lg}) {
    top: -5px;
    right: 0;
  }
`;

export const CatImage = styled.img`
  position: absolute;
  top: 323px;
  right: -23px;

  transform-origin: 0% 50%;
  animation-name: ${anim3};

  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 690px;
    right: -10px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 435px;
    right: 90px;
  }
`;

export const DoggyImage = styled.img`
  position: absolute;
  top: 238px;
  right: 175px;

  transform-origin: 100% 100%;
  animation-name: ${anim1};

  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media screen and (${props => props.theme.media.md}) {
    top: 520px;
    right: 405px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 260px;
    right: 500px;
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
