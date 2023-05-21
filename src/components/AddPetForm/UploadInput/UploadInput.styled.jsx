import styled from 'styled-components';

export const UploadFileLabel = styled.label`
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: flex-start;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  margin-top: 16px;
  gap: 27px;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.media.md}) {
    font-size: 20px;
    flex-direction: ${props =>
      props['data-category'] !== 'your pet' ? 'column' : 'row'};
    gap: ${props => (props['data-category'] !== 'your pet' ? '12px' : '27px')};
  }
`;

export const UploadFile = styled.input`
  display: none;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;

  @media screen and (min-width: ${props => props.theme.media.md}) {
    border-radius: 40px;
  }
`;

export const PhotoWrapper = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background: ${props => props.theme.colors.blueLight};
  border-radius: 20px;

  @media screen and (min-width: ${props => props.theme.media.md}) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 120px;
  bottom: -20px;
  padding-left: 16px;
  font-size: 12px;

  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;
