import styled from 'styled-components';
import { theme } from '../../theme/theme';

console.log(theme);

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
  :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  }
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
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }

  /* @‌media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 32px;
    padding: 21px 32px;
  }
  @‌media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 50px;
    padding: 21px 40px;
  } */
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
  background-color: ${theme.colors.white};

  /* :hover,
  :focus {
    color: ${theme.colors.white};
    border: none;
    background: ${theme.colors.blueGradient};
  } */
`;
export const Cancel = styled.svg`
  fill: ${theme.colors.blue};
  margin-right: 16px;
`;
export const BtnBackArrow = styled.button`
  height: 40px;
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
  background-color: ${theme.colors.white};
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
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 16px;
  border-radius: 40px;
  font-size: 12px;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.semibold};
  border: none;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.mainShadow};
  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;
export const Add = styled.svg`
  fill: ${theme.colors.white};
  margin-right: 15px;
`;
export const AddCurcle = styled.svg`
  fill: ${theme.colors.white};
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
`;
export const Heart = styled.svg`
  fill: ${theme.colors.blue};
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

  :hover,
  :focus {
    background: ${theme.colors.blueGradient};
  }
`;
