import styled from 'styled-components';
// import  { theme } from '../../theme/theme';
import sm_pets1x from '../../images/pets-hero/Pets_sm1x.png';
import sm_pets2x from '../../images/pets-hero/Pets_sm2x.png';
import md_pets1x from '../../images/pets-hero/Pets-md1x.png';
import md_pets2x from '../../images/pets-hero/Pets-md2x.png';
import lg_pets1x from '../../images/pets-hero/Pets_lg1x.png';
import lg_pets2x from '../../images/pets-hero/Pets_lg2x.png';
import sm_bg_sm1x from '../../images/bg/bg-sm@1x-1.png';
import sm_bg_sm2x from '../../images/bg/bg-sm@2x-2.png';
import md_bg_md1x from '../../images/bg/bg-md@1x-2.png';
import md_bg_md2x from '../../images/bg/bg-md@2x-1.png';
import lg_bg_lg1x from '../../images/bg/bg-lg@1x.png';
import lg_bg_lg2x from '../../images/bg/bg-lg@2x.png';

export const HeroSection = styled.section`
  position: absolute;
  top: 68px;
  right: 0;
  bottom: 0;
  left: 0;


  width: 100vw;
  min-height: calc(100vh - 168px);
  padding: 48px 20px 60px 20px;

  background-image: url(${sm_bg_sm1x});
  background-position: 0% 0%;
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${sm_bg_sm2x});
  }

  h1 {
    margin: 0;

    font-family: 'Manrope', sans-serif;
    font-size: 32px;
    line-height: 44px;
  }
  div {
    position: absolute;
    top: 156px;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: 384px;

    background-image: url(${sm_pets1x});
    background-position: 58% -54px;
    background-size: 475px 457px;
    background-repeat: no-repeat;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${sm_pets2x});
    }
  }

  @media (min-width: 767px) {
    min-height: calc(100vh - 148px);
    margin-top: 88px;
    padding: 0px 32px 0px 32px;

    background-image: url(${md_bg_md1x});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${md_bg_md2x});
    }

    h1 {
      font-size: 68px;
      line-height: calc(100 / 68);
    }
    div {
      top: 225px;
      min-height: 684px;

      background-image: url(${md_pets1x});
      background-position: 46% -112px;
      background-size: 986px 982px;
      @media screen and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${md_pets2x});
      }
    }
  }

  @media (min-width: 1279px) {
    max-width: 1280px;
    margin-top: 0px;
    padding: 0px 0px 0px 16px;
    margin-right: auto;
    margin-left: auto;

    background-image: url(${lg_bg_lg1x});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${lg_bg_lg2x});
    }

    h1 {
      width: 525px;
      margin-top: 188px;

      font-size: 68px;
      line-height: 130%;
    }
    div {
      top: 48px;
      left: 363px;
      min-height: 684px;

      background-image: url(${lg_pets1x});
      background-position: 50% -104px;
      background-size: 954px 975px;
    
      @media screen and (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${lg_pets2x});
      }
    }
  }
`;
