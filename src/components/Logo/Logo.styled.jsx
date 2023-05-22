// import styled from 'styled-components';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 50;
`;

export const LogoIcon = styled.img`
  @media screen and (min-width: 481px) {
    display: initial;
  }
  display: none;
`;

export const LogoIconSm = styled.img`
  @media screen and (max-width: 480px) {
    display: initial;
  }
  display: none;
`;
