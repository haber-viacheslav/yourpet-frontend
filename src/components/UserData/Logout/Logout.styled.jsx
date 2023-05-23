import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export const LogoutTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-style: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;
  color: ${theme.colors.grey};
`;

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 21px auto 0px 5px;
  width: 96px;
`;