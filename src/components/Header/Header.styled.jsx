import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 320px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 24px 0px 24px;

  @media screen and (${props => props.theme.media.md}) {
    margin-top: 20px;
    margin-right: 16px;
    margin-bottom: 0;
    margin-left: 16px;
    width: 1280px;
  }
`;
