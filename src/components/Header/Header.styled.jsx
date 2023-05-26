import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  @media screen and (${props => props.theme.media.md}) {
    padding-top: 24px;
    padding-bottom: 0;
  }
  @media screen and (${props => props.theme.media.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 20px;
  }
`;
