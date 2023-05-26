import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const UploadFileLabel = styled.label`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 12px;
  line-height: calc(22 / 12);
  letter-spacing: 4%;
  gap: 15px;
  cursor: pointer;
`;

export const UploadFile = styled.input`
  display: none;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
  object-fit: cover;
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
  background: ${props => {
    if (!props['data-color']) {
      return props.theme.colors.blueLight;
    } else {
      return props.theme.colors.transparent;
    }
  }};
  border-radius: 40px;
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 180px;
  bottom: -16px;
  text-align: center;

  font-size: 12px;

  line-height: 1.35;
  color: ${props => props.theme.colors.red};
`;
