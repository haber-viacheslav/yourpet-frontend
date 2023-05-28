import styled from 'styled-components';

export const FiltersContainer = styled.div`
  position: relative;
  padding-bottom: 24px;
  @media screen and (${props => props.theme.media.lg}) {
    display: flex;
  }
`;

export const FilterAdsContainer = styled.div``;

export const FiltersBtnContainer = styled.div`
  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    gap: 12px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
