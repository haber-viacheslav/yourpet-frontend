import styled from 'styled-components';
import { ReactComponent as Notify } from '../../../../images/icons.svg';
import icons from 'images/icons.svg';
{/* <use href={icons + '#icon-pawprint'}></use> */}

export const Item = styled.li`
  width: 100%;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.background.blueGradient};
    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 32px) / 3);
  }
`;

export const WrapImg = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 20px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
export const Plug = styled(Notify)`
background-image: url("images/icon-pawprint/icons.svg");
  width: 280px;
  height: 280px;
  fill: #54adff;
`;

export const Wrap = styled.div`
  margin-bottom: 40px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: 16px;
  height: 66px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Decsr = styled.p`
  font-weight: 400;
  line-height: 1.37;
  height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const WrapBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;
export const Date = styled.p`
  font-weight: 400;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Link = styled.a`
  padding: 0;
  line-height: 1.37;
  color: ${({ theme }) => theme.colors.blue};
  transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.grey};
  }
`;