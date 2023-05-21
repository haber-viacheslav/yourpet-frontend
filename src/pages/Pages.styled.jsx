import styled from 'styled-components';
import { theme } from '../theme/theme';

import bg_sm_1x from '../images/bg/bg-sm@1x.png';
import bg_sm_2x from '../images/bg/bg-sm@2x.png';
import bg_md_1x from '../images/bg/bg-md@1x.png';
import bg_md_2x from '../images/bg/bg-md@2x.png';
import bg_lg_1x from '../images/bg/bg-lg@1x.png';
import bg_lg_2x from '../images/bg/bg-lg@2x.png';

export const BgWrapper = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;

  background-image: url(${bg_sm_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_sm_2x});
  }

  @media screen and (${theme.media.md}) {
    background-image: url(${bg_md_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_md_2x});
    }
  }

  @media screen and (${theme.media.lg}) {
    background-image: url(${bg_lg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_lg_2x});
    }
  }
`;
