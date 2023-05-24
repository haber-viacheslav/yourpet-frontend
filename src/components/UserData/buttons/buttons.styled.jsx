import styled from "styled-components";
import { theme } from "theme/theme";


export const StyledEditPhotoBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94px;
  padding: 0;
  border: none;
  background-color: transparent;
  border: none;
  color: ${theme.colors.dark};
  font-weight: ${theme.fontWeights.regular};
  font-size: 12px;
  line-height: calc(22/12);
  letter-spacing: 0.04em;
  cursor: pointer;
`;

export const StyledConfirmPhotoBtn = styled(StyledEditPhotoBtn)`
  width: 79px;
`;

export const InputButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  border: none;
`;

