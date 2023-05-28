import styled, { keyframes } from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: -126px;
  right: 0px;
  width: 152px;
  background-color: ${props => props.theme.colors.light};
  list-style: none;
  padding: 8px;
  margin: 0;
  z-index: 200;
  background: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};
  border-radius: 20px;
  animation: ${fadeIn} 0.3s ease-in-out;
@media screen and (${props => props.theme.media.md}){  position: absolute;
  top: 50px;
  left: 12px;
}
`;

export const FilterGroup = styled.li`
  background: ${props => props.theme.colors.blueLight};
  border-radius: 20px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.clearWhite};
  padding: 10px;
  background: ${props => props.theme.colors.blueLight};
  border-radius: 20px;
  gap: 8px;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
`;

export const MenuButton = styled.span`
  display: flex;
  padding: 4px 8px;
  cursor: pointer;
  color: ${props => props.theme.colors.blue};
`;
export const Title = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1.37;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 8px;
`;
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[1]};
  align-items: center;
  margin-left: 8px;
`;

export const Item = styled.li`
  position: relative;
  margin-left: 30px;
`;

export const Label = styled.label`
  font-family: 'Inter';
  display: flex;
  align-items: center;
  gap: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;

`;
