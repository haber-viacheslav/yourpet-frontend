import styled from 'styled-components';

export const FiltersConteiner = styled.div`
  position: relative;
  padding-bottom: 24px;
  @media screen and (${props => props.theme.media.lg}) {
    display: flex;
  }
`;

export const FilterAdsConteiner = styled.div``;

export const FiltersBtnConteiner = styled.div`
  display: none;
  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    gap: 12px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
