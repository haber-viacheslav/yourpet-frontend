import styled from 'styled-components';
import { ReactComponent as Notify } from '../../../../images/icons.svg';

export const Item = styled.li`
  width: 100%;
  position: relative;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.blue};
    background: ${props => props.theme.colors.blueGradient};
    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }
  @media screen and (${props => props.theme.media.md}) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (${props => props.theme.media.lg}) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 252px;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;
export const Plug = styled(Notify)`
  background-image: url('images/icon-pawprint/icons.svg');
  width: 280px;
  height: 252px;
  fill: #54adff;
  @media screen and (${props => props.theme.media.md}) {
    width: 366px;
  }
  @media screen and (${props => props.theme.media.md}) {
    width: 395px;
  }
`;

export const Wrap = styled.div`
  padding: 0 12px 12px;
`;
export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  overflow: hidden;
  height: 100px;
`;

export const Description = styled.p`
  font-weight: 400;
  line-height: 1.37;
  height: 100px;
`;

export const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Date = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: ${props => props.theme.colors.grey};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const Link = styled.a`
  padding: 0;
  line-height: 1.37;
  color: ${props => props.theme.colors.blue};
  transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grey};
  }
`;
