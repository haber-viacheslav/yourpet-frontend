import styled from 'styled-components';

export const PaginationWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.whity};
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${props => props.theme.colors.whity};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 45px;
  padding: 8px 16px 9px 14px;
  width: 280px;
  @media screen and (${props => props.theme.media.md}) {
    width: 310px;
    padding: 8px 11px 9px 12px;
  }
`;

export const PaginationListItem = styled.li``;

export const PaginationBtn = styled.button`
  outline: none;
  border: 1px solid ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.blueLight};
  background-color: ${props => props.theme.colors.transparent};
  display: inline-flex;
  width: 35px;
  height: 35px;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover,
  :focus {
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.blueLight};
  }
`;

export const PaginationBtnActive = styled(PaginationBtn)`
  border-color: ${props => props.theme.colors.blue};
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.whity};
`;

export const PaginationArrowBtn = styled(PaginationBtn)``;
