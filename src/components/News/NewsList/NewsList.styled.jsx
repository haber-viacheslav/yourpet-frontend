import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  margin-bottom: 40px;
  display: grid;
  row-gap: 44px;
  width: 100%;
  /* @media screen and (${props => props.theme.media.toMd}) {
    width: 280px;
  } */
  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 46px;
    margin-bottom: 60px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    column-gap: 31px;
    row-gap: 46px;
  }
`;
