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
  top: 60px;
  left: 12px;
  width: 152px;
  background-color: #f0f0f0;
  list-style: none;
  padding: 8px;
  margin: 0;
  z-index: 200;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const FilterGroup = styled.li`
  padding: 5px 0;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
`;

export const SVG = styled.svg`
  display: block;
  fill: transparent;
  stroke: currentColor;
`;

export const MenuButton = styled.span`
  display: flex;
  cursor: pointer;
`