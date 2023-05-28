import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-row-gap: 24px;
  padding-bottom: 40px;
  @media screen and (${props => props.theme.media.md}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    padding-bottom: 60px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
