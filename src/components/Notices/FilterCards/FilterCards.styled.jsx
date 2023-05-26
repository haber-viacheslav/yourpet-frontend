import styled, { keyframes } from 'styled-components';

export const DropdownWrapper = styled.div`
  /* position: relative; */
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
  top: 100px;
  left: 0;
  width: 200px;
  background-color: #f0f0f0;
  list-style: none;
  padding: 10px;
  margin: 0;
  z-index: 200;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const DropdownMenuItem = styled.li`
  padding: 5px 0;
`;