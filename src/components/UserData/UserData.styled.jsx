import styled from 'styled-components';
import { theme } from "theme/theme";

export const ProfileTitle = styled.h2`
  font-family: Manrope;
  font-style: 500;
  font-size: 20px;
  line-height: 27.32px;
  letter-spacing: 4%;
  color: ${theme.colors.dark};
  align: left;
  margin-bottom: 18px;

  @media screen and ${theme.media.md} {
    margin-bottom: 24px;
    font-style: 500;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0;
  };
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-item: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};

  margin: 0; 
  padding: 20px 8px 25px;
  border-radius: 20px;

  box-shadow: 3px 8px 14px 0px #88C6FD30;

  @media screen and ${theme.media.md} {
    border-radius: 40px;
    padding: 0;
  }

  @media screen and ${theme.media.lg} {
    border-radius: 40px;
    padding: 0;
  }
`;


export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: stretch;
  justify-content: stretch;
  padding: 20px 8px 25px;
  margin: 0; 
  border-radius: 20px;
  outline: ${props => props.outline || '2px solid red'};

  @media screen and ${theme.media.md} {
    border-radius: 40px;
    padding: 20px 76px 20px 20px;
  }

  @media screen and ${theme.media.lg} {
    padding: 20px 24px 20px 16px;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  @media screen and ${theme.media.md} {
    flex-direction: row-reverse;
    gap: 71px;
  }

  @media screen and ${theme.media.lg} {
    flex-direction: column;
    gap: 26px;
    width: 395px;
  }

`;


export const ProfileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
  margin-top: 22px;

`;