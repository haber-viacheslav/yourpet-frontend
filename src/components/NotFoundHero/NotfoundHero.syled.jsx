import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Box = styled.div`
  display: block;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.35;
  text-align: center;
  color: ${theme.colors.clearBlack};
  margin-right: auto;
  margin-left: auto;
  max-width: 280px;
  height: 66px;
  @media screen and (${props => props.theme.media.md}) {
    font-weight: ${theme.fontWeights.semibold};
    font-size: 32px;
    line-height: 1.35;
    max-width: 450px;
    color: ${theme.colors.black};
  }
`;
export const Span = styled.span`
  display: block;

  @media screen and (${props => props.theme.media.md}) {
    display: inline-block;
  }
`;
export const BlockTitle = styled.div`
  animation: animate120 3000ms infinite 1000ms;
  @keyframes animate120 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  };
  margin: 80px auto 80px auto;
  @media screen and (${props => props.theme.media.md}) {
    margin: 60px auto 80px auto;
  }
`;
export const ImageWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (${props => props.theme.media.md}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    padding-left: 229px;
    padding-right: 229px;
  }
`;

export const Cat = styled.img`
  width: 280px;
 
  @media screen and (${props => props.theme.media.md}) {
    width: 704px;   
  }
  @media screen and (${props => props.theme.media.lg}) {
    width: 822px;    
  }
`;

export const BlockBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 69px;
  @media screen and (${props => props.theme.media.md}) {
    margin-top: 70px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    margin-top: 18px;
  }
`;
