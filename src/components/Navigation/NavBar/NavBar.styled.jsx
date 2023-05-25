import styled from 'styled-components';

export const Navigate = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;
`;

export const BoxUser = styled.div`
  margin-left: auto;
  @media (max-width: 1279px) {
  }
`;
export const BoxAuth = styled.div`
  display: none;
  @media (min-width: 768px) {
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
