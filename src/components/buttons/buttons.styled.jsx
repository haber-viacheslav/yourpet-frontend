import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const BtnLM = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  padding: 8px 78px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  background-color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  }
  margin: 0 auto 20px;
`;
export const BigBtnFavor = styled.button`
  height: 38px;
  width: 248px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 40px;
  padding-left: auto;
  padding-right: auto;
  border: none;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;

export const Pawprint = styled.svg`
  fill: ${theme.colors.white};
  margin-left: 12px;
`;
export const BtnCancelArrow = styled.button`
  height: 40px;
  width: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  border: none;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.transparent};
  cursor: pointer;

  /* :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  } */
`;
export const ArrowLeft = styled.svg`
  stroke: ${theme.colors.blue};
  margin-right: 12px;
`;
export const BtnBackArrow = styled.button`
  height: 24px;
  width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  border: none;
  color: ${theme.colors.blue};
  background-color: ${theme.colors.transparent};
  cursor: pointer;
`;
export const BtnAdd = styled.button`
  height: 40px;
  width: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 16px;
  border-radius: 40px;
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  border: none;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  cursor: pointer;
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;
export const BtnAddCurcle = styled.button`
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 16px;
  border-radius: 40px;
  font-size: 12px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.semibold};
  border: none;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mainShadow};
  cursor: pointer;
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
  position: absolute;
  top: 108px;
  right: 0;
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;
export const Add = styled.svg`
  stroke: ${theme.colors.white};
  margin-right: 15px;
`;
export const AddCurcle = styled.svg`
  stroke: ${theme.colors.white};
  margin-bottom: 8px;
`;
export const BtnHeart = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  background-color: ${theme.colors.blueLight};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
`;
export const FilterCurcle = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  background-color: ${theme.colors.blueLight};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

export const Heart = styled.svg`
  fill: none;
  stroke: ${theme.colors.blue};
  :hover,
  :active {
    fill: ${theme.colors.blue};
  }
`;
export const BtnRegLog = styled.button`
  height: 48px;
  width: 458px;
  display: flex;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  justify-content: center;
  padding: 8px 78px;
  border-radius: 40px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  font-size: 20px;
  line-height: 1, 35;
  letter-spacing: 0.04em;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.semibold};
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;
export const BtnFilter = styled.button`
  height: 40px;
  width: 129px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  background-color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  }
`;
export const Filter = styled.svg`
  fill: none;
  stroke: ${theme.colors.blue};
  :hover,
  :focus {
    stroke: ${theme.colors.white};
  }
`;
export const BtnOption = styled.button`
  height: 35px;
  border-radius: 40px;
  padding: 8px 16px;
  background-color: ${theme.colors.blueLight};
  border: none;
  color: ${theme.colors.blue};
  font-weight: ${theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }
  margin: 0 8px 8px 0;
`;
export const BtnToHeart = styled.button`
  height: 40px;
  width: 129px;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;
export const ToHeart = styled.svg`
  fill: none;
  stroke: ${theme.colors.white};
  margin-left: 11px;
`;
export const BtnContact = styled.button`
  height: 40px;
  width: 129px;
  border-radius: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.04em;
  line-height: 1.35;
  color: ${theme.colors.blue};
  border: 2px solid ${theme.colors.blue};
`;
export const PetInfoStyle = styled.div`
  height: 28px;
  width: 80px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blueLight};
  border: none;
  color: ${theme.colors.black};
`;
export const PetCategoryStyle = styled.div`
  width: 126px;
  height: 32px;
  position: absolute;
  top: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blueLight};
  border: none;
  color: ${theme.colors.black};
`;
export const City = styled.svg`
  fill: none;
  stroke: ${theme.colors.blue};
  margin-right: 4px;
`;
export const TexStyletInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
export const TexCategoyInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;

export const YesBtn = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.04em;
  line-height: 1.35;
  background-color: ${theme.colors.blue};
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
  :hover,
  :focus,
  :active {
    background: ${theme.colors.blueGradient};
  }

  @media screen and (${props => props.theme.media.md}) {
    width: 129px;
  }
`;

export const Delete = styled.svg`
  fill: none;
  stroke: ${theme.colors.white};
  margin-left: 8px;
`;

export const Logout = styled.svg`
  fill: none;
  stroke: ${theme.colors.white};
  margin-left: 11px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  background-color: ${theme.colors.transparent};
  color: ${theme.colors.blue};
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: ${theme.colors.black};
  }
  @media screen and (${props => props.theme.media.md}) {
    top: 24px;
    right: 24px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    top: 23px;
    right: 26px;
  }
`;
export const Close = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${theme.colors.currentColor};
  stroke: ${theme.colors.currentColor};
`;

export const BtnCloseStyled = styled.button`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blue};
  color: ${theme.colors.blue};
  background-color: ${theme.colors.clearWhite};
  font-size: 16px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  }

  @media screen and (${props => props.theme.media.md}) {
    width: 129px;
  }
`;
export const Arrow = styled.svg`
  stroke: ${theme.colors.currentColor};
  fill: ${theme.colors.currentColor};
`;
export const Avatar = styled.svg`
  fill: none;
  stroke: ${theme.colors.orange};
`;
