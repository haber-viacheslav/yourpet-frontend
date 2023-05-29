import styled, { keyframes } from 'styled-components';
import icons from 'images/icons.svg';

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

export const IconCheck = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-check'}></use>
    </SVG>
  );
};
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 50px;
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
  background: #cce4fb;
  border-radius: 20px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  background: #cce4fb;
  border-radius: 20px;
  gap: 8px;
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
  padding: 4px 8px;
  cursor: pointer;
  color: #54adff;
`;
export const Title = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  color: #54adff;
  margin-bottom: 8px;
`;
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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
  color: #54adff;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;

`;
