import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FiltersContainer = styled.div`
  display: flex;
  align-items: flex-start;

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
    justify-content: flex-end;
    margin-left: auto;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.blue};
  background: ${props => props.theme.colors.blueLight};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;
  border: none;
  cursor: pointer;

  :hover,
  &.active {
    color: ${props => props.theme.colors.whity};
    background-color: ${props => props.theme.colors.blue};
  }
`;

export const CategoryBntWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6px;

  @media screen and (${props => props.theme.media.md}) {
    gap: 12px;
  }
`;
