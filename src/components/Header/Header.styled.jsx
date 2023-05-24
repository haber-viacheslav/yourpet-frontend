import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  max-width: 100%;
  height: 48px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 22px 20px 0px 20px;

  @media screen and (${props => props.theme.media.md}) {
    margin-top: 24px;
    margin-right: 32px;
    margin-bottom: 0;
    margin-left: 32px;
    height: 44px;
  }
  @media screen and (${props=>props.theme.media.lg}){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
  }
`;
