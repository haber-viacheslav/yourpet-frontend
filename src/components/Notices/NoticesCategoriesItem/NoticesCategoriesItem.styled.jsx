import styled from 'styled-components';

export const ContainerCard = styled.li`
  position: relative;
  width: 280px;
  border-block: solid 0px #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
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
export const Text = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  padding: 0px 20px 20px 0;
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
