import styled from 'styled-components';

export const Navigate = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxUser = styled.div`
  margin-left: auto;
`;
export const BoxAuth = styled.div`
  display: none;
  @media screen and (${props => props.theme.media.md}) {
    display: inherit;
  }
`;
export const BoxNavigate = styled.div`
  display: none;
  @media screen and (${props => props.theme.media.lg}) {
    display: inherit;
    margin-left: 270px;
    margin-right: auto;
    flex-direction: row;
    padding-bottom: 0;
  }
`;
