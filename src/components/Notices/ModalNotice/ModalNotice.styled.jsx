import styled from 'styled-components';

export const ImagConteiner = styled.div`
  position: relative;
  margin-bottom: 12px;
  @media screen and (${props => props.theme.media.md}) {
    width: 262px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const FlexBlock = styled.div`
  @media screen and (${props => props.theme.media.md}) {
    display: flex;
    gap: 24px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const ImgModal = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  @media screen and (${props => props.theme.media.md}) {
    width: 262px;
    height: 298px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    width: 288px;
  }
`;

export const PetInfoList = styled.ul`
  display: flex;
  align-self: flex-start;
  margin-bottom: 12px;
  @media screen and (${props => props.theme.media.md}) {
    margin-bottom: 28px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;

export const PetInfoitem = styled.li`
  margin-left: 20px;
  padding-top: 2px;
  @media screen and (${props => props.theme.media.md}) {
    padding-top: 0px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const MailInfo = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #ffc107;
  margin-bottom: 11px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;

export const InfoValue = styled(MailInfo)`
  color: #000000;
  text-decoration-line: none;
  @media screen and (${props => props.theme.media.md}) {
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const InfoFlag = styled(MailInfo)`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  text-decoration-line: none;
  margin-bottom: 8px;

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const TelInfo = styled(MailInfo)``;
export const ComentInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 12px;
  @media screen and (${props => props.theme.media.md}) {
    margin-bottom: 70px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const BtnConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row;
    width: 273px;
    gap: 17px;
    align-self: flex-end;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
