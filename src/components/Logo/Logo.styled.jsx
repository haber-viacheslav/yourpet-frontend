// import styled from 'styled-components';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  z-index: 50;
  @media screen and (${props => props.theme.media.md}) {
    padding-top: 8px;
    margin-right: 167px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    padding-top: 10px;
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


