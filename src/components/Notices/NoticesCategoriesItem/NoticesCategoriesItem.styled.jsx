import styled from 'styled-components';

export const ContainerCard = styled.li`
  position: relative;
  width: 280px;
  border-block: solid 0px #ffffff;
  box-shadow: ${props => props.theme.shadows.mainShadow};

  border-radius: 0px 0px 40px 40px;
  margin-bottom: 24px;
  width: 280px;
  height: 456px;
  @media screen and (${props => props.theme.media.md}) {
    width: 336px;
    height: 456px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    width: 288px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 248px;
  right: 8px;
  @media screen and (${props => props.theme.media.md}) {
    right: 24px;
    gap: 24px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    right: 12px;
    gap: 12px;
  }
`;

export const DeleteBtnWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 68px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: ${props => props.theme.colors.blueLight};
`;

export const Text = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  padding: 0 20px 0 20px;
  @media screen and (${props => props.theme.media.md}) {
    font-size: 28px;
    line-height: 38px;
  }
`;
export const Img = styled.img`
  margin-bottom: 20px;
  width: 336px;
  height: 288px;
  object-fit: cover;
  @media screen and (${props => props.theme.media.md}) {
    width: 336px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    width: 288px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 57px;
  right: 1px;
  height: 40px;
  width: 40px;
  margin: 12px 12px 16px 0;

  background: #cce4fb;
  border: transparent;
  border-radius: 50%;

  cursor: pointer;
`;
