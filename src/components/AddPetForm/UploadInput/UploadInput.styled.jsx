import styled from 'styled-components';

export const UploadFileLabel = styled.label`
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: flex-start;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding-left: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 27px;
  cursor: pointer;
`;

export const UploadFile = styled.input`
  display: none;
  width: 264px;
  height: 92px;
  padding: 8px 16px;
  margin-top: 4px;
  outline: transparent;
  border: 1px solid #54adff;
  border-radius: 20px;
  resize: none;

  &::placeholder {
    font-size: 14px;
    color: #7a7a7a;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
`;

export const PhotoWrapper = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background: #cce4fb;
  border-radius: 20px;
`;
export const UploadWrapper = styled.span`
  position: relative;
`;

export const ErrWrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 120px;
  bottom: -20px;
  padding-left: 16px;
  font-size: 12px;
  padding: 0;

  line-height: 16px;
  color: red;
`;
