import styled from 'styled-components';

export const UploadFileLabel = styled.label`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 12px;
  line-height: calc(22/12);
  letter-space: 4%;
  gap: 15px;
  cursor: pointer;
`;

// export const UploadLabelWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: ${props => props.width || '94px'};
// `;

export const UploadFile = styled.input`
  display: none;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
`;

export const PhotoPlaceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const PhotoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 182px;
  background: ${props => props.theme.colors.blueLight};
  border-radius: 40px;

  @media screen and (${props => props.theme.media.md}) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 180px;
  bottom: -25px;
  text-align: center;

  font-size: 12px;

  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;