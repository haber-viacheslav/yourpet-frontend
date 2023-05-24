// import styled from 'styled-components';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  @media screen and (${props => props.theme.media.md}) {
    margin-right: auto;
  }
  @media screen and (${props => props.theme.media.lg}) {
    margin-right: 0;
  }
`;

export const LogoIcon = styled.img`
  max-width: 116px;
  height: 20px;
  @media screen and (${props => props.theme.media.md}) {
    max-width: 168px;
    height: 28px;
    display: inherit;
  }
`;


