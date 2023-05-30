import styled from 'styled-components';

export const ImgContainer = styled.div`
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
    align-self: flex-start;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const ImgModal = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;
  @media screen and (${props => props.theme.media.md}) {
    width: 262px;
    height: 298px;
  }
  @media screen and (${props => props.theme.media.lg}) {
    width: 288px;
  }
`;

export const PetInfoList = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 12px;
  @media screen and (${props => props.theme.media.md}) {
    margin-bottom: 28px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
export const Text = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  padding: 0 0 20px 0;
  @media screen and (${props => props.theme.media.md}) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const PetInfoItem = styled.div`
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
  margin-bottom: 11px;
  color: #ffc107;
  :hover,
  :focus {
    text-decoration-line: underline;
  }

  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
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

export const CommentInfo = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #000000;
  padding: 20px 20px;
  @media screen and (${props => props.theme.media.md}) {
    align-self: flex-start;

    font-size: 16px;
    line-height: 24px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (${props => props.theme.media.md}) {
    flex-direction: row-reverse;
    width: 273px;
    gap: 17px;
    position: absolute;
    bottom: 24px;
    right: 31px;
  }
`;
