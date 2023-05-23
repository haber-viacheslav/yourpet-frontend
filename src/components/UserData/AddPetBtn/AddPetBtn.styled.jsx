import styled from "styled-components";
import { theme } from "theme/theme";

export const StyledLink = styled.link`
  display: flex;
  justify-content: space-between;
  width: 129px;
  padding: 8px 16px;
  border: none;
  border-radius: 40px;
  background-color: ${theme.colors.blue};
  text-decoration: none;
  color: ${theme.colors.white};
`

